const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seed = async () => {
  try {
    await prisma.animal.create({
      data: { name: "Capybara", continent: "SouthAmerica" },
    });
    console.log('Seeding completed.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();

