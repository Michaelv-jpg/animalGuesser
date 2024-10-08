const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** User must be logged in to access tasks. */
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});

/** Fetch animals by continent */
router.get("/animals/:continent", async (req, res, next) => {
  try {
    const continent = req.params.continent;
    const animals = await prisma.animals.findMany({
      where: { continent: continent },
    });

    if (!animals.length) {
      throw new ServerError(404, `No animals found for continent: ${continent}`);
    }

    res.json(animals);
  } catch (err) {
    next(err);
  }
});

// Other existing routes for tasks
