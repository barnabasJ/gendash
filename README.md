![CI](https://github.com/barnabasJ/gendash/workflows/CI/badge.svg)

# Gendash

Gendash is a library inspired by libraries like [lodash](https://lodash.com/). It is built on
top of Javascript Iterators/Generators in order to have a lazy execution model when possible.

Because the single functions return generators nothing happens until the results are collected

```typescript
const generator = map([1, 2, 3, 4, 5], n => n * n)
console.log(generator)
# Generator {}

const squares = take(generator, 2)
console.log(squares)
# [1, 4]
```

As we can see the numbers are only generated if we use a eager function to get the values.

Aside from computing the changes only when they are really needed, only the amount of needed
values is calculated. This means we can have generators that would yield infinte values.

```typescript
let values = range(Infinity)
console.log(values)
# Generator {}

values = map(values, (n) => n + 1)
console.log(values)
# Generator {}

values = map(values, (v) => {
    console.log(v)
    return v
})
console.log(values)
# Generator {}

values = take(values, 3)
# 1
# 2
# 3
console.log(values)
# [1, 2, 3]
```

All functions inside the lazy folder return generators, functions in the eager folder compute and return values.

If possible the functions are lazy, but not all function can be lazy make sense to be lazy.
E.g. sort only makes sense if it can look at all the values.
