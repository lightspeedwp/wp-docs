## Security Policy

We take the security of this project seriously. If you believe you have found a vulnerability, follow the coordinated disclosure process below.

### 1. Reporting

-   **Email:** [support@lightspeedwp.agency](mailto:support@lightspeedwp.agency)
-   **Subject Line:** `SECURITY: <brief summary>`
-   **Include (as applicable):**
    -   Affected file(s) / section(s)
    -   Description of the issue & impact
    -   Steps to reproduce (minimal proof-of-concept if possible)
    -   Any suggested remediation ideas
    -   Whether the issue has been disclosed elsewhere

Please DO NOT open a public GitHub issue for potential vulnerabilities.

### 2. Response Targets

| Phase                       | Target Time                                              |
| --------------------------- | -------------------------------------------------------- |
| Acknowledgement             | ≤ 3 business days                                        |
| Initial assessment          | ≤ 5 business days                                        |
| Remediation plan            | Typically within 10 business days (complexity dependent) |
| Advisory / changelog update | At fix release                                           |

### 3. Scope

In-scope issues include (non-exhaustive):

-   Sensitive data exposure through documentation or scripts
-   Unsafe code examples promoting injection / XSS / CSRF / SSRF / privilege escalation
-   Incorrect guidance that weakens WordPress hardening (e.g., advising disabling core protections)
-   Supply chain risks in automation (script execution of untrusted input)

Out-of-scope examples:

-   Typos, broken non-security links
-   UI/UX polish issues with no security implication
-   Vulnerabilities in third-party platforms referenced (report upstream)

### 4. Temporary Mitigations

If you can suggest a safe interim mitigation, include it. Avoid recommending insecure workarounds (e.g., disabling sanitisation) unless strictly necessary and clearly caveated.

### 5. Disclosure Policy

We prefer coordinated disclosure. We will notify you when a fix is prepared and may request retest confirmation. Public acknowledgement is optional—let us know if you would like credit.

### 6. Security Guidance References

-   WordPress Security: https://developer.wordpress.org/security
-   WordPress Coding Standards: https://developer.wordpress.org/coding-standards/wordpress-coding-standards/
-   Project secure coding instructions: `.github/instructions/security-and-owasp.instructions.md`

### 7. Hardening Principles Followed

-   Principle of least privilege
-   Input sanitisation on ingress, context-specific escaping on egress
-   Nonce + capability checks for state-changing operations (where code examples exist)
-   Avoidance of unsafe deserialisation patterns

### 8. Versioning & Advisory

Security-relevant changes are noted under the `Security` section in `CHANGELOG.md` (Keep a Changelog format). If impact warrants, a separate advisory / GitHub Security Advisory may be issued.

---

Thank you for helping keep the ecosystem safer.
