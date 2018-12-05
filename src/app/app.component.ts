import { Component } from '@angular/core';
import { EngineService } from './engine-service';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { phoneFacts } from './facts/phones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private actionType = 'algo';
  private actionParams: any = {};
  private userFacts = { name: '', recommended: [] };
  private phones = phoneFacts;

  private value: number;

  constructor(private engineService: EngineService) {
    console.log('Constructor');
    this.run();
  }

  private run() {
    console.log('Facts: ', this.userFacts);

    const self = this;
    this.engineService.on('SHOW_RESULTS', (params) => { this.processEvent(self, params); });
    this.engineService.on('OPEN_QUESTION', (params) => { this.processEvent(self, params); });
    this.engineService.on('MULTIPLE_CHOICE', (params) => { this.processEvent(self, params); });
    this.engineService.run(this.userFacts);
  }

  public next(value?: any) {
    if (value) {
      this.value = value;
    }
    this.userFacts[this.actionParams.path] = this.value;
    this.value = undefined;
    this.run();
  }

  public processEvent(component, params) {
    console.log('Process event', params);

    console.log('type', params.type);

    console.log(component.actionType);
    component.actionType = params.type;
    component.actionParams = params;

    component.engineService.stop();
  }

  public countRecommended(): number {
    return this.userFacts.recommended.reduce((a, b) => a + b, 0);
  }

  public restart() {
    this.userFacts = { name: '', recommended: [] };
    this.run();
  }

  public remove(path: string) {
    this.userFacts[path] = undefined;
    this.run();
  }
}
