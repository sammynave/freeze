import { Factory, association} from 'ember-cli-mirage';

export default Factory.extend({
  chosen: association(),
  afterCreate(human, server) {
    let choices = server.createList('choice', 2);
    human.update('choices', choices);
  }
});
