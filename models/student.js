const murid = [
  {
    id: "1",
    name: "Test 1",
    lokasi: "Lokasi 1",
    kelas: "7.1",
  },
  {
    id: "2",
    name: "Test 2",
    lokasi: "Lokasi 2",
    kelas: "7.3",
  },
  {
    id: "3",
    name: "Test 3",
    lokasi: "Lokasi 3",
    kelas: "7.2",
  },
  {
    id: "4",
    name: "Test 4",
    lokasi: "Lokasi 4",
    kelas: "7.3",
  },
  {
    id: "5",
    name: "Test 5",
    lokasi: "Lokasi 5",
    kelas: "7.3",
  },
  {
    id: "6",
    name: "Test 6",
    lokasi: "Lokasi 6",
    kelas: "7.2",
  },
  {
    id: "7",
    name: "Test 7",
    lokasi: "Lokasi 7",
    kelas: "7.1",
  },
  {
    id: "8",
    name: "Test 8",
    lokasi: "Lokasi 8",
    kelas: "7.3",
  },
  {
    id: "9",
    name: "Test 9",
    lokasi: "Lokasi 9",
    kelas: "7.2",
  },
  {
    id: "10",
    name: "Test 10",
    lokasi: "Lokasi 10",
    kelas: "7.1",
  },
];

const getStudent = () => {
  return murid;
};

const filterStudent = (id) => {
  return murid.filter((item) => {
    return item.id === id;
  });
};

const getStudentByName = (name) => {
  return murid.filter((item) => {
    return item.name.includes(name);
  });
};

module.exports = { getStudent, filterStudent, getStudentByName };
