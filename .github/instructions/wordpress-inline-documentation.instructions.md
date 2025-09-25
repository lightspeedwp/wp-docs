---
description: 'WordPress inline documentation standards for PHP, JavaScript, and general code documentation following official WordPress coding standards'
applyTo: '**/*.php,**/*.js,**/*.jsx,**/*.ts,**/*.tsx'
license: 'GPL-3.0'
stability: 'stable'
tags: ['wp-core', 'documentation', 'comments', 'php', 'javascript']
domain: 'wp-core'
---

# WordPress Inline Documentation Standards

Follow WordPress official inline documentation standards for consistent, helpful code documentation.

## Core Principles

- **Write for developers**: Document for future maintainers, including yourself
- **Document the WHY, not the WHAT**: Explain purpose, context, and reasoning
- **Use proper DocBlock format**: Follow WordPress-specific formatting for consistency
- **Be concise but complete**: Provide necessary information without redundancy
- **Update when code changes**: Keep documentation synchronized with implementation

## PHP Documentation (DocBlocks)

### Function Documentation

```php
/**
 * Summary line - brief description of what the function does.
 *
 * Description paragraph providing more detail about the function's purpose,
 * behavior, and any important implementation notes.
 *
 * @since 1.0.0
 *
 * @param string $param1 Description of the first parameter.
 * @param array  $param2 {
 *     Optional. Description of array parameter.
 *
 *     @type string $key1 Description of array key.
 *     @type int    $key2 Description of another key.
 * }
 * @param bool   $param3 Optional. Description with default. Default false.
 *
 * @return string|bool Return description. False on failure.
 */
function my_function( $param1, $param2 = array(), $param3 = false ) {
    // Implementation
}
```

### Class Documentation

```php
/**
 * Brief description of the class.
 *
 * Longer description explaining the class purpose, usage patterns,
 * and any important implementation details.
 *
 * @since 1.0.0
 */
class My_Class {
    
    /**
     * Property description.
     *
     * @since 1.0.0
     * @var string
     */
    public $property;
    
    /**
     * Constructor method description.
     *
     * @since 1.0.0
     *
     * @param string $param Description.
     */
    public function __construct( $param ) {
        // Implementation
    }
}
```

### Hook Documentation

```php
/**
 * Filters the example value before processing.
 *
 * @since 1.0.0
 *
 * @param mixed  $value   The value to filter.
 * @param string $context Context information.
 */
$filtered_value = apply_filters( 'my_filter_name', $value, $context );

/**
 * Fires when an example action occurs.
 *
 * @since 1.0.0
 *
 * @param int    $post_id The post ID.
 * @param string $status  The post status.
 */
do_action( 'my_action_name', $post_id, $status );
```

## JavaScript Documentation (JSDoc)

### Function Documentation

```javascript
/**
 * Brief description of what the function does.
 *
 * Longer description explaining the function's purpose and usage.
 *
 * @since 1.0.0
 *
 * @param {string}   param1 - Description of the parameter.
 * @param {Object}   param2 - Object parameter description.
 * @param {string}   param2.key1 - Description of object property.
 * @param {number}   param2.key2 - Description of another property.
 * @param {boolean} [param3=false] - Optional parameter with default.
 *
 * @return {string|null} Return description. Null on failure.
 */
function myFunction( param1, param2, param3 = false ) {
    // Implementation
}
```

### Class Documentation

```javascript
/**
 * Brief description of the class.
 *
 * Longer description explaining class purpose and usage patterns.
 *
 * @since 1.0.0
 *
 * @class
 */
class MyClass {
    
    /**
     * Constructor description.
     *
     * @since 1.0.0
     *
     * @param {string} param - Parameter description.
     */
    constructor( param ) {
        /**
         * Property description.
         *
         * @type {string}
         */
        this.property = param;
    }
    
    /**
     * Method description.
     *
     * @since 1.0.0
     *
     * @param {number} value - Input value.
     * @return {boolean} Success status.
     */
    myMethod( value ) {
        // Implementation
    }
}
```

### Block Editor Components

```javascript
/**
 * Custom block component for displaying featured content.
 *
 * Renders a customizable content block with title, description,
 * and optional image for the WordPress block editor.
 *
 * @since 1.0.0
 *
 * @param {Object}   props - Component props.
 * @param {string}   props.title - Block title.
 * @param {string}   props.content - Block content.
 * @param {Object}   props.attributes - Block attributes.
 * @param {Function} props.setAttributes - Function to update attributes.
 *
 * @return {WPElement} Element to render.
 */
const MyBlockComponent = ( { title, content, attributes, setAttributes } ) => {
    // Implementation
};
```

## WordPress-Specific Guidelines

### Required Tags

- `@since` - Always include version when item was introduced
- `@param` - Document all parameters with type and description
- `@return` - Document return value type and meaning
- `@see` - Reference related functions or documentation
- `@link` - Link to external documentation
- `@todo` - Mark incomplete implementations
- `@deprecated` - Mark deprecated functions with replacement info

### Security Documentation

```php
/**
 * Sanitizes user input for database storage.
 *
 * SECURITY: This function must be used for all user-provided data
 * before database insertion to prevent SQL injection attacks.
 *
 * @since 1.0.0
 *
 * @param string $input Raw user input.
 * @return string Sanitized input safe for database.
 */
function sanitize_user_input( $input ) {
    return sanitize_text_field( $input );
}
```

### Performance Notes

```php
/**
 * Retrieves posts with caching for performance.
 *
 * PERFORMANCE: Results are cached for 1 hour to reduce database queries.
 * Cache is automatically invalidated when posts are modified.
 *
 * @since 1.0.0
 *
 * @param array $args Query arguments.
 * @return array Array of post objects.
 */
function get_cached_posts( $args ) {
    // Implementation with caching
}
```

### Accessibility Documentation

```php
/**
 * Renders accessible navigation menu.
 *
 * ACCESSIBILITY: Includes proper ARIA labels and keyboard navigation
 * support following WCAG 2.1 AA guidelines.
 *
 * @since 1.0.0
 *
 * @param array $menu_items Array of menu items.
 * @return string HTML markup for accessible menu.
 */
function render_accessible_menu( $menu_items ) {
    // Implementation with ARIA support
}
```

## Internationalization Documentation

```php
/**
 * Gets localized error message.
 *
 * @since 1.0.0
 *
 * @param string $error_code The error code identifier.
 * @return string Translated error message.
 */
function get_error_message( $error_code ) {
    return __( 'Default error message', 'textdomain' );
}
```

## Common Mistakes to Avoid

- **Don't state the obvious**: Avoid comments that simply restate the code
- **Don't use @author tags**: WordPress core doesn't use individual author attribution
- **Don't duplicate information**: If parameter types are obvious from type hints, focus on behavior
- **Don't forget @since**: Always include version information
- **Don't use generic descriptions**: Be specific about what the function actually does

## Documentation for WordPress APIs

### REST API Endpoints

```php
/**
 * Retrieves posts via REST API endpoint.
 *
 * @since 1.0.0
 *
 * @param WP_REST_Request $request Full details about the request.
 * @return WP_REST_Response|WP_Error Response object on success, WP_Error on failure.
 */
function handle_posts_endpoint( $request ) {
    // Implementation
}
```

### Custom Post Types

```php
/**
 * Registers the 'portfolio' custom post type.
 *
 * Creates a custom post type for portfolio items with public frontend
 * visibility and REST API support for the block editor.
 *
 * @since 1.0.0
 */
function register_portfolio_post_type() {
    // Implementation
}
```

Remember: Good inline documentation is an investment in future maintainability and developer experience.

