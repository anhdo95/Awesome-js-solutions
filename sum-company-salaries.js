let departments = {
  sales: [{
    name: 'Bill',
    salary: 1500
  }, {
    name: 'Buffett',
    salary: 2000
  }],

  development: {
    sites: [{
      name: 'Bob',
      salary: 1000
    }, {
      name: 'Shara',
      salary: 1200
    }],

    internals: [{
      name: 'AnhDo',
      salary: 2100
    }]
  }
};

/**
 * Calculate the whole salaries of departments in the company using recursiveness
 * @param {object | array} department 
 */
function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department
            .reduce((previous, current) => previous + current.salary, 0)
  }

  // sub-departments
  return Object.values(department)
          .reduce((previous, current) => previous + sumSalaries(current), 0)
}

const total = sumSalaries(departments)

console.log(total) // 7800