import { Injectable } from '@angular/core';
import { Engine, Rule } from 'json-rules-engine';
import { lgKite } from './rules/suggestions/lgKite';
import { lgG6 } from './rules/suggestions/lgG6';
import { samsungPocket } from './rules/suggestions/samsungPocket';
import { motorolaG } from './rules/suggestions/motorolaG';
import { samsungJ7Pro } from './rules/suggestions/samsungJ7Pro';
import { lgK10 } from './rules/suggestions/lgK10';
import { motorolaG5Plus } from './rules/suggestions/motorolaG5Plus';
import { samsungS9Plus } from './rules/suggestions/samsungS9Plus';
import { motorolaG6Play } from './rules/suggestions/motorolaG6Play';
import { showResults } from './rules/showResults';
import { askName } from './rules/askName';
import { askprice } from './rules/askPrice';
import { phoneFacts } from './facts/phones';
import { askCamera } from './rules/askCamera';
import { askScreenSize } from './rules/askScreenSize';
import { askRam } from './rules/askRam';
import { askProcessor } from './rules/askProcessor';
import { finish } from './rules/finish';

@Injectable()
export class EngineService {

  private engine: Engine;

  constructor() {
    this.initEngine();
  }

  public run(userFacts) {
    return this.engine.run({ 'userFacts': userFacts });
  }

  public stop() {
    this.engine.stop();
  }

  public addFact(name: string, value) {
    this.engine.addFact(name, value);
  }

  public removeFact(name: string) {
    this.engine.removeFact(name);
  }

  public on(eventName: string, callback: Function) {
    this.engine.on(eventName, callback);
  }

  public initEngine() {
    // localStorage.debug = 'json-rules-engine';
    const options = {
      allowUndefinedFacts: true
    };
    const rules = this.loadRules();
    this.engine = new Engine(rules, options);
    this.setCustomOperators();
    this.setInitialFacts();

    this.engine.on('success', function (event, almanac, ruleResult) {
      console.log('successful rule', event, almanac, ruleResult);
    });

    this.engine.on('failure', function (event, almanac, ruleResult) {
      console.log('failed rule', ruleResult);
    });
  }

  private loadRules() {
    return [
      askName, showResults, askprice, askCamera, askScreenSize, askRam, askProcessor, finish,
      samsungPocket,
      motorolaG,
      lgKite,
      samsungJ7Pro,
      motorolaG5Plus,
      lgK10,
      samsungS9Plus,
      motorolaG6Play,
      lgG6];
  }

  private setCustomOperators() {
    this.engine.addOperator('sumEqual', (factValue, jsonValue) => {
      return factValue && factValue.length && (factValue.reduce((a, b) => a + b, 0) === jsonValue);
    });
  }

  private setInitialFacts() {
    phoneFacts.forEach((fact) => {
      console.log('Add fact ', fact.factId, fact);
      this.engine.addFact(fact.factId, fact);
    });
  }
}
