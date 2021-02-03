import { Fractal, conse } from "whatsup";
import WhatsupDocumentTitle from "../../src";

export class App extends Fractal<JSX.Element> {
  readonly title = conse("Título da página");

  *whatsUp() {
    while (true) {
      yield (
        <>
          <WhatsupDocumentTitle title={yield* this.title}>
            <p>Insira:</p>
            <input
              value={yield* this.title}
              onInput={(e) => {
                // @ts-ignore
                this.title.set(e.target.value);
              }}
            />
          </WhatsupDocumentTitle>
        </>
      );
    }
  }
}
