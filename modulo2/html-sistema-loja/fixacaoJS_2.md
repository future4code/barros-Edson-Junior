```
function calculaPrecoTotal(quantidade) {
```
```
  let valorFinal = 0
```
```
  if (quantidade < 12) {
```
```
    valorFinal = quantidade*1.30
```
``` 
  }else if(quantidade >= 12) {
```
```
    valorFinal = quantidade*1 
```
```
  }
```
```
  return valorFinal
```
```
}
```