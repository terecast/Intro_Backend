

SELECT c.customer_id FROM customer as c
JOIN sales as s ON s.customer_id = c.customer_id
GROUP BY c.customer_id 
HAVING COUNT(sku) >= (SELECT COUNT(sku) FROM product);




SELECT customer.city FROM (
									SELECT customer_id,sku FROM sales
									GROUP BY customer_id,sku
									ORDER BY customer_id,sku) as t
JOIN customer ON customer.customer_id = t.customer_id
GROUP BY t.customer_id,customer.city 
HAVING COUNT(*) = (SELECT COUNT(*) FROM product)



SELECT * FROM customer limit 1