import { SomeComponentComponent } from './../app/some-component/some-component/some-component.component';
import { ProxyModule } from './../app/proxy.module';
import { WithControlValueAccessorComponent } from './../app/with-control-value-accessor/with-control-value-accessor.component';
import { WithControlValueAccessorModule } from './../app/with-control-value-accessor/with-control-value-accessor.module';
import { AppModule } from '../app/app.module';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { StoryFn } from '@storybook/addons';

export default {
  title: 'Test'
}

const moduleMetadata = {
  imports: [ProxyModule]
};

// this is for another repro

// export const someComponent: StoryFn<StoryFnAngularReturnType> = () => ({
//   component: SomeComponentComponent,
//   moduleMetadata
// });

// export const someComponentAgain: StoryFn<StoryFnAngularReturnType> = () => ({
//   template: `
//     <app-some-component></app-some-component>
//   `,
//   moduleMetadata
// });

export const testX: StoryFn<StoryFnAngularReturnType> = () => ({
  template: `
    value is: {{ model }}
    <app-with-control-value-accessor [(ngModel)]="model"></app-with-control-value-accessor>
  `,
  props: {
    model: 'x'
  },
  moduleMetadata
});

export const testY: StoryFn<StoryFnAngularReturnType> = () => ({
  template: `
    value is: {{ model }}
    <app-with-control-value-accessor [(ngModel)]="model"></app-with-control-value-accessor>
  `,
  props: {
    model: 'y'
  },
  moduleMetadata
});
