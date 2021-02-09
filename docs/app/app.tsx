import { Fractal, conse } from 'whatsup';
import WhatsupDocumentTitle from '../../src';

export class App extends Fractal<JSX.Element> {
  readonly title = conse('Page title');

  *whatsUp() {
    while (true) {
      yield (
        <>
          <WhatsupDocumentTitle title={yield* this.title}>
            <p>Insert the page title:</p>
            <input
              value={yield* this.title}
              onInput={(e) => {
                this.title.set(e.target.value);
              }}
            />
          </WhatsupDocumentTitle>
        </>
      );
    }
  }
}
