# Task 4

#### 1. This code is working perfectly but it's hard to maintain, please make the code below cleaner and readable

```php
public function isCustomerActive($customer){
  if($customer->status == 'active') {
    return true
  }else{
    return false
  }
}
public function isCustomerLimitAvailable($customer){
  if($customer->debt > 10000000) {
    return true
  }else{
    return false
  }
}
public function getPrice() {
  if(isCustomerActive($customer)){
    if(isCustomerLimitAvailable($customer)){
      if($customer->group == 'distributor') {
        return Price::get('distributor');
      }
      if($customer->group == 'general'){
        return Price::get('general');
      }
      return error('not found')
    }else{
      return error('this customer cannot make a purchase due to his debt over limit');
    }
  }else{
    return error('this customer is not active')
  }
}
```

#### 2. After change the code, make a pull request
