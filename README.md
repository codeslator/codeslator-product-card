# Codeslator Product Card

This is a NPM test deploy project.

### Andres Melendez - Codeslator

## Usage

```jsx
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '';
```

```jsx
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, count, isMaxCountReach, increaseBy, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons/>
    </>
  )}
</ProductCard>
```
