const { connectDB } = require('./connection'); 
const db = require('./model');
async function main() {
  try {
  await connectDB();

  const docentes = await db.Docente.find();
  } catch (error) {
    console.log(error);
  }
}

main();