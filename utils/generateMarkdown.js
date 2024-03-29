// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if(license === "mozilla"){
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else {
      return ""
    }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// just copied the links from the second half of the license badges above?
function renderLicenseLink(license) {
  if (license === "apache"){
    return `https://opensource.org/licenses/Apache-2.0`
  } else if(license === "MIT"){
    return `https://opensource.org/licenses/MIT`
    } else if (license === "mozilla"){
      return `https://opensource.org/licenses/MPL-2.0`
    } else {
      return ""
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// table of contents already handles this for us

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Test](#test)
6. [License](#license)
7. [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## License
${data.license}
${renderLicenseLink(data.license)}

## Questions
https://github.com/${data.username} </br> 
For additional questions contact me at ${data.email}
`;
} 
// needed a line break for questions section, no idea why.

module.exports = generateMarkdown;
