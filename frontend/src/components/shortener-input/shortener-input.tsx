import { component$, useContext, useRef } from '@builder.io/qwik';
import { InputContext, Store } from '~/routes';
import { ShortenerInputBtn } from './shortener-input-btn';

export interface ShortenerInputProps {
  ref: any;
  onKeyUp$: (event: KeyboardEvent) => void;
  onInput$: (event: InputEvent) => void;
  onSubmit$: () => void;
}

export const ShortenerInput = component$((props: ShortenerInputProps) => {
  const state: Store = useContext(InputContext) as Store;
  const shortenerInputBtnRef = useRef();
  return (
    <div className="form-control">
      <div class="sm:input-group mb-3 flex-col sm:flex-row gap-2 sm:gap-0">
        <input
          ref={props.ref}
          onKeyUp$={props.onKeyUp$}
          onInput$={props.onInput$}
          value={state.inputValue}
          type="text"
          id="urlInput"
          class="input input-bordered focus:outline-0 bg-base-200 flex-auto w-full sm:w-auto mb-2"
          placeholder="Very long url..."
          aria-label="url"
          aria-describedby="shortenerBtn"
        />
        <ShortenerInputBtn
          ref={shortenerInputBtnRef}
          disabled={state.inputValue.length === 0}
          onClick$={props.onSubmit$}
        />
      </div>
    </div>
  );
});
