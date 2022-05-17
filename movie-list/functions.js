const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
  await driver.findElement(By.xpath(`//input`)).sendKeys('Multiverse of Madness')

  await driver.findElement(By.xpath(`//button[text()='Add']`)).click()

  const movie = await driver.findElement(By.xpath(`//li/span[text()='Multiverse of Madness']`))

  const displayed = movie.isDisplayed()

  expect(displayed).toBeTruthy()
}

module.exports = {
  addMovie
}