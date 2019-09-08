class: middle, center

# React hooks

### Stateful functional components without classes

![React logo](assets/react.svg)

---

class: midlle

# Agenda

- 1: What is a hook?
- 2: Hooks
  - 2.1: useState
  - 2.2: useEffect
  - 2.3: useReducer
  - 2.4: useRef
  - 2.5: useMemo
  - 2.6: useContext
- 3: Pitfalls
- 4: Testing hooks

---

# What is a hook?

--

Implementation of _statefullness_ and _side effects_ in functional components.

--

1. useState is essentially a _closure_, namely:

> Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

--

2. useEffect handles _side effects_, define as:

--

> A side effect is any application state change that is observable outside the called function other than its return value.

Example: network requests, console logging, I/O operations...

???

```javascript
const useState = initialValue => {
  // Lexical scope
  let value = initialValue;
  const state = () => value; // closure
  const setState = newValue => {
    value = newValue; // closure
  };

  return [state, setState];
};

const [state, setState] = useState(0);
console.log(state); // 0
setState(1);
console.log(state); // 1
```

```javascript
const getMovies = async () => {
  const res = await fetch('/movies.json');
  const movies = await res.json();
  return movies;
};
```

---

# Hooks

### Basic Hooks (fits most use cases)

- useState
- useEffect
- useContext
- useReducer
- useRef
- useMemo

### Additional Hooks (more specialized usage)

- useCallback
- useImperativeHandle
- useLayoutEffect
- useDebugValue

---

# useState - functional statefullness

```javascript
const [state, setState] = useState(initialState);
```

--

1. `initialState` sets the, yes surprise, inital value (can also be a function)

--

2. `setState` function allows you to update state (doesn't automatically merge update objects)

```javascript
  setState(prevState => { ...prevState, ...updatedValues });
  // setState({ myKey: myValue }) won't work or use useReducer
```

Example:

---

# useEffect

```javascript
useEffect(() => {
  return () => {}; // Clean up function
}, []);
```

- Using side effects aren't allowed inside React's _render phase_, as it leads to bugs/UI inconsistencies
- useEffect run after renders
- side effects in functional components must be executed here

--

> The question is not "when does this effect run" the question is "with which state does this effect synchronize with"

> - useEffect(fn) // all state
> - useEffect(fn, []) // no state
> - useEffect(fn, [these, states])

Example.

???

- Changing the thinking away from object orientated programming to functional programming:

```javascript
```

---

# useReducer

```javascript
const [state, dispatch] = useReducer(reducer, initialState, init);
```

---

# useRef

```javascript
const ref = useRef(initialValue);
```

---

# useMemo

```javascript
  useMemo(() => function, input)
```

---

# useContext

```javascript
const context = useContext(contextValue);
```

---

# Testing hooks

If you test _"implementation"_ instead of **"behaviour"**, refactor using hooks will break tests. If you test behaviour, React hooks is merely an implementation detail.

Example.

<!-- https://reactjs.org/docs/hooks-faq.html#how-to-test-components-that-use-hooks -->

---

