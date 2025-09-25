# PHP Standards

- Tabs; braces on same line; Yoda comparisons.
- Namespaces/PSR-4 allowed; DI over singletons.
- `$wpdb->prepare()`; escape output; i18n for user strings.
- Prefix globals or use namespaces; lowercase-hyphenated file names.
- PHPUnit for critical logic.

```php
/**
 * Example.
 * @since 1.0.0
 * @param float $net  Net price.
 * @param float $rate Tax rate (e.g. 20).
 * @return float
 */
function lsx_total( $net, $rate ) {
	return $net + ( $net * ( $rate / 100 ) );
}
```
