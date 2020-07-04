from django.db import models

class Product(models.Model):
    item = models.CharField(max_length = 45)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __repr__(self):
        return f"<Product object: {self.item} {self.price} ({self.id})"

class Order(models.Model):
    quantityOrdered = models.IntegerField()
    product= models.ForeignKey(Product, related_name = 'Orders', on_delete = models.CASCADE, null = True) 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __repr__(self):
        return f"<Order object: {self.quantityOrdered} {self.product} ({self.id})"
