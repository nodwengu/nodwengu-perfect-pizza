module.exports = function () {
   const patients = [
      { name: 'zola', greets: 0 },
      { name: 'thando', greets: 0 },
      { name: 'zan', greets: 0 }
   ];

   function getAll() {
      return patients;
   }

   return {
      getAll
   }
};