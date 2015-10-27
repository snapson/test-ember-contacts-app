import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  picture() { return faker.internet.avatar() },
  name() { return faker.name.findName() },
  company() { return faker.company.companyName() },
  email() { return faker.internet.email() },
  phone() { return faker.phone.phoneNumberFormat() },
  address() { return faker.address.streetAddress() }
});