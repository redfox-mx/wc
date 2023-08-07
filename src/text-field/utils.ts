export function validateSyntaxRule (rules: string): boolean {
  const ruleRegex = /^(required|minlength:\d+|maxlength:\d+|min:\d+|max:\d+|email|pattern:.+)(\|(?=(?!$))|$)/

  const rulesArray = rules.split('|')

  for (const rule of rulesArray) {
    if (!rule.match(ruleRegex)) {
      return false
    }
  }

  return true
}

/**
 * Parses a rules string and returns an array of rule items.
 *
 * The rules string should have a format like "key:value|key:value|...".
 * Each rule is separated by the "|" character, and key-value pairs are separated by ":".
 *
 * @param {string} rules - The rules string to be parsed.
 * @returns {{ key: string; value: string | null }[]} An array of rule items.
 * Each item contains a 'key' property representing the rule name,
 * and an optional 'value' property representing the rule value if provided.
 * If the rule does not have a value, 'value' will be null.
 */
export function parseRules (rules: string): { key: string; value: string | null }[] {
  if (!rules || !validateSyntaxRule(rules)) return []

  const _rules = rules.split('|')

  return _rules.map((rule) => {
    const [key, value = null] = rule.split(':')
    return { key, value }
  })
}
