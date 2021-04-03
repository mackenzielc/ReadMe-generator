// Returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  var badge;

  if(data.license == 'GNU AGPLv3'){
    badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if(data.license == "GNU GPLv3"){
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if(data.license === "GNU LGPLv3"){
    badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if(data.license === "Mozilla"){
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }else if(data.license === "Apache"){
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if(data.license === "MIT"){
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if(data.license === "Boost Software"){
    badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }else if(data.license === "The Unlicense"){
    badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }else{
      bade = ""
  }
  return badge;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}**
  ${renderLicenseBadge(data)}
  
  ## Description
  ${data.description}

  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is covered by the ${data.license} license.
  For more information, please click [here](https://choosealicense.com/licenses/)

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For questions, please contact me at:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](${data.email})
`
}

module.exports = generateMarkdown;
