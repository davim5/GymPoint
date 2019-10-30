import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .integer()
        .positive()
        .required(),
      height: Yup.number()
        .positive()
        .required(),
      weight: Yup.number()
        .positive()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists.' });
    }

    const { id, email, name, age, weight, height } = await Student.create(
      req.body
    );
    return res.json({
      id,
      name,
      email,
      age,
      weight,
      height,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.number()
        .integer()
        .positive(),
      height: Yup.number().positive(),
      weight: Yup.number().positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { name, email } = req.body;

    const student = await Student.findOne({
      where: { name: req.body.name },
    });

    if (email !== student.email) {
      const studentExists = await Student.findOne({
        where: { email: req.body.email },
      });
      if (studentExists) {
        return res.status(400).json({ error: 'Student already exists.' });
      }
    }

    const { id, age, height, weigth } = await student.update(req.body);

    return res.json({
      id,
      name,
      email,
      age,
      height,
      weigth,
    });
  }
}

export default new StudentController();
