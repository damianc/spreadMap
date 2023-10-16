# spreadMap

It works like the `map()` method, but one value is mapped to more values. It is achieved by returning an array of values to spread into the final array from a callback passed to the method.

```
spreadMap((item, index, array) => array)
```

## Example

```
const arr = [1,2,3,4];
const sm = arr.spreadMap(
  x => [x, x**2]
);

console.log(sm);
// [1,1,2,4,3,9,4,16]
```
