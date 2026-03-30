import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            isNumeric: "readonly",
            openStudentExamRecords: "readonly",
            openEmployeePayrollRecords: "readonly",
            openStudentEnrollmentRecords: "readonly",
            openInventoryItemsRecords: "readonly",
            openCustomerGasUsageRecords: "readonly",
            openZipCodeStudyRecordSet: "readonly",
        },

        ecmaVersion: "latest",
        sourceType: "script",
    },

    rules: {
        "arrow-body-style": ["error", "as-needed", {
            requireReturnForObjectLiteral: false,
        }],

        "arrow-parens": ["error", "as-needed", {
            requireForBlockBody: true,
        }],

        "arrow-spacing": ["error", {
            before: true,
            after: true,
        }],

        "constructor-super": "error",

        "generator-star-spacing": ["error", {
            before: false,
            after: true,
        }],

        "no-class-assign": "error",

        "no-confusing-arrow": ["error", {
            allowParens: true,
        }],

        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": "off",
        "no-new-symbol": "error",
        "no-restricted-imports": "off",
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",

        "no-useless-rename": ["error", {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],

        "no-var": "error",

        "object-shorthand": ["error", "always", {
            ignoreConstructors: false,
            avoidQuotes: true,
        }],

        "prefer-destructuring": ["off", {
            array: true,
            object: true,
        }, {
            enforceForRenamedProperties: false,
        }],

        "prefer-numeric-literals": "error",
        "prefer-reflect": "off",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "require-yield": "error",
        "rest-spread-spacing": ["error", "never"],

        "sort-imports": ["off", {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        }],

        "symbol-description": "error",
        "template-curly-spacing": "error",
        "yield-star-spacing": ["error", "after"],
        "init-declarations": "off",
        "no-catch-shadow": "off",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-restricted-globals": "off",
        "no-shadow-restricted-names": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-undefined": "off",

        "no-use-before-define": ["error", {
            functions: true,
            classes: true,
            variables: true,
        }],

        "array-bracket-spacing": ["error", "never"],
        "block-spacing": ["error", "always"],

        "capitalized-comments": ["off", "never", {
            line: {
                ignorePattern: ".*",
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },

            block: {
                ignorePattern: ".*",
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
        }],

        "comma-spacing": ["error", {
            before: false,
            after: true,
        }],

        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "consistent-this": "off",
        "func-call-spacing": ["error", "never"],

        "func-name-matching": ["off", "always", {
            includeCommonJSModuleExports: false,
        }],

        "func-style": ["off", "expression"],
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "jsx-quotes": ["off", "prefer-double"],

        "key-spacing": ["error", {
            beforeColon: false,
            afterColon: true,
        }],

        "keyword-spacing": ["error", {
            before: true,
            after: true,

            overrides: {
                return: {
                    after: true,
                },

                throw: {
                    after: true,
                },

                case: {
                    after: true,
                },
            },
        }],

        "line-comment-position": ["off", {
            position: "above",
            ignorePattern: "",
            applyDefaultPatterns: true,
        }],

        "linebreak-style": ["error", "unix"],
        "lines-around-comment": "off",
        "max-depth": ["off", 4],

        "max-lines": ["off", {
            max: 300,
            skipBlankLines: true,
            skipComments: true,
        }],

        "max-nested-callbacks": "off",
        "max-params": ["off", 3],
        "max-statements": ["off", 10],

        "max-statements-per-line": ["off", {
            max: 1,
        }],

        "multiline-ternary": ["off", "never"],

        "new-cap": ["error", {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
        }],

        "new-parens": "error",
        "newline-after-var": "off",
        "newline-before-return": "off",

        "newline-per-chained-call": ["error", {
            ignoreChainWithDepth: 4,
        }],

        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-continue": "error",
        "no-inline-comments": "off",
        "no-lonely-if": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": ["error"],
        "no-negated-condition": "off",
        "no-nested-ternary": "error",
        "no-new-object": "error",

        "no-restricted-syntax": [
            "error",
            "ForInStatement",
            "ForOfStatement",
            "LabeledStatement",
            "WithStatement",
        ],

        "no-spaced-func": "error",
        "no-tabs": "error",
        "no-ternary": "off",

        "no-underscore-dangle": ["error", {
            allowAfterThis: false,
        }],

        "no-unneeded-ternary": ["error", {
            defaultAssignment: false,
        }],

        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "off",
        "object-curly-spacing": ["error", "always"],

        "object-curly-newline": ["off", {
            ObjectExpression: {
                minProperties: 0,
                multiline: true,
            },

            ObjectPattern: {
                minProperties: 0,
                multiline: true,
            },
        }],

        "object-property-newline": ["error", {
            allowMultiplePropertiesPerLine: true,
        }],

        "one-var": ["error", "never"],
        "one-var-declaration-per-line": ["error", "always"],
        "require-jsdoc": "off",
        semi: ["error", "always"],

        "semi-spacing": ["error", {
            before: false,
            after: true,
        }],

        "sort-keys": ["off", "asc", {
            caseSensitive: false,
            natural: true,
        }],

        "sort-vars": "off",
        "space-before-blocks": "error",

        "space-before-function-paren": ["error", {
            anonymous: "always",
            named: "never",
            asyncArrow: "always",
        }],

        "space-in-parens": ["error", "never"],

        "space-unary-ops": ["error", {
            words: true,
            nonwords: false,

            overrides: {
                typeof: false,
            },
        }],

        "template-tag-spacing": ["off", "never"],
        "unicode-bom": ["error", "never"],
        "wrap-regex": "off",
        "callback-return": "off",
        "global-require": "error",
        "handle-callback-err": "off",
        "no-mixed-requires": ["off", false],
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-restricted-modules": "off",
        "no-sync": "off",
        "no-await-in-loop": "error",
        "no-compare-neg-zero": "off",
        "no-cond-assign": ["error", "always"],
        "no-constant-condition": "warn",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",

        "no-extra-parens": ["off", "all", {
            conditionalAssign: true,
            nestedBinaryExpressions: false,
            returnAssign: false,
        }],

        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-obj-calls": "error",
        "no-prototype-builtins": "error",
        "no-regex-spaces": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-negated-in-lhs": "off",
        "use-isnan": "error",
        "valid-jsdoc": "off",
        "accessor-pairs": "off",
        "array-callback-return": "error",
        "block-scoped-var": "error",
        complexity: ["off", 11],

        "class-methods-use-this": ["error", {
            exceptMethods: [],
        }],

        "consistent-return": "error",

        "default-case": ["error", {
            commentPattern: "^no default$",
        }],

        "dot-notation": ["error", {
            allowKeywords: true,
        }],

        "dot-location": ["error", "property"],
        "guard-for-in": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-div-regex": "off",

        "no-empty-function": ["error", {
            allow: ["arrowFunctions", "functions", "methods"],
        }],

        "no-empty-pattern": "error",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",

        "no-global-assign": ["error", {
            exceptions: [],
        }],

        "no-implicit-globals": "off",
        "no-implied-eval": "error",
        "no-invalid-this": "off",
        "no-iterator": "error",

        "no-labels": ["error", {
            allowLoop: false,
            allowSwitch: false,
        }],

        "no-lone-blocks": "error",
        "no-loop-func": "error",

        "no-magic-numbers": ["off", {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        }],

        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-redeclare": "error",

        "no-restricted-properties": ["error", {
            object: "arguments",
            property: "callee",
            message: "arguments.callee is deprecated",
        }, {
            property: "__defineGetter__",
            message: "Please use Object.defineProperty instead.",
        }, {
            property: "__defineSetter__",
            message: "Please use Object.defineProperty instead.",
        }, {
            object: "Math",
            property: "pow",
            message: "Use the exponentiation operator (**) instead.",
        }],

        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",

        "no-unused-expressions": ["error", {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
        }],

        "no-unused-labels": "error",
        "no-useless-call": "off",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-void": "error",

        "no-warning-comments": ["off", {
            terms: ["todo", "fixme", "xxx"],
            location: "start",
        }],

        "no-with": "error",

        "prefer-promise-reject-errors": ["off", {
            allowEmptyReject: true,
        }],

        radix: "error",
        "require-await": "off",
        "vars-on-top": "error",

        "wrap-iife": ["error", "outside", {
            functionPrototypeMethods: false,
        }],

        yoda: "error",
        "brace-style": ["error", "1tbs"],

        camelcase: ["error", {
            properties: "always",
        }],

        curly: "error",

        eqeqeq: ["warn", "always", {
            null: "ignore",
        }],

        indent: ["error", 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,

            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },

            FunctionExpression: {
                parameters: 1,
                body: 1,
            },

            ignoreComments: true,
            ignoredNodes: ["ForStatement > BinaryExpression", "ForStatement > UpdateExpression"],
        }],

        "max-len": ["error", 100, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
        }],

        "no-implicit-coercion": ["error", {
            boolean: false,
            number: true,
            string: false,
        }],

        "no-multi-spaces": ["error", {
            ignoreEOLComments: true,

            exceptions: {
                Property: true,
                VariableDeclarator: true,
                ImportDeclaration: true,
            },
        }],

        "no-native-reassign": "error",
        "no-unmodified-loop-condition": "error",

        "no-unused-vars": ["error", {
            vars: "local",
            args: "after-used",
            ignoreRestSiblings: true,
            varsIgnorePattern: "part0[1234]|lab[01][0-9](Part0[12])?",
        }],

        "operator-linebreak": ["error", "before"],
        quotes: ["error", "double"],

        "space-infix-ops": ["error", {
            int32Hint: false,
        }],

        "valid-typeof": "error",
    },
}];