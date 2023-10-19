const express = require('express');
const bp = require('body-parser');

const router = express.Router();

router.use(bp.json());

const todos = [{ id: 1, title: 'book' }];

router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  const newTod = req.body;
  // !!! body olmasa deye yoxla if statement verib
  // !!! her objectin oz id si olmalidi onu nezere al yeni object elave edende
  res.json(newTod);
});

router.put('/:id', (req, res) => {
  const todId = req.params.id;
  // !!! duzgun logic de deyil
  /* 1. gelen id ye esasen arrayde hemin itemin indexini tap finIndex metodu ile
    2. eger -1 vererse if statement 404 versin
    3. req bodyden yeni melumatlari gotur
    4. array[az evvel tapdigin itemin indexi] beraber et yeni melumatlarin oldugu objecte
    5. body bos gele biler deye if statement 404 versin */
  res.send('Update to id');
});

router.delete('/:id', (req, res) => {
  const todId = req.params.id;
  res.send('Delete to id');
  // !!! duzgun logic de deyil
  /* 1. gelen id ye esasen arrayde hemin itemin indexini tap finIndex metodu ile
  2.  eger -1 vererse if statement 404 versin
  3. splice metodu ile objecti sil arrayden*/
});

module.exports = router;
