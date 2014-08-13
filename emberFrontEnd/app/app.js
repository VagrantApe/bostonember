import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import DS from 'ember-data';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'bostonember', // TODO: loaded via config
  Resolver: Resolver
});

App.Store = DS.Store.extend();

loadInitializers(App, 'bostonember');

export default App;
