# i18n-ally

## Commands

| Command                                 | Title                                                               |
| --------------------------------------- | ------------------------------------------------------------------- |
| `i18n-ally.config-locales`              | %extname%: %command.config_locales%                                 |
| `i18n-ally.config-locales-auto`         | %extname%: %command.config_locales_auto%                            |
| `i18n-ally.config-display-language`     | %extname%: %command.config_display_language%                        |
| `i18n-ally.config-source-language`      | %extname%: %command.config_source_language%                         |
| `i18n-ally.set-display-language`        | %extname%: %command.set_display_language%                           |
| `i18n-ally.set-source-language`         | %extname%: %command.set_source_language%                            |
| `i18n-ally.copy-key`                    | %extname%: %command.copy_key%                                       |
| `i18n-ally.translate-key`               | %extname%: %command.translate_key%                                  |
| `i18n-ally.edit-key`                    | %extname%: %command.edit_key%                                       |
| `i18n-ally.open-key`                    | %extname%: %command.open_key%                                       |
| `i18n-ally.delete-key`                  | %extname%: %command.delete_key%                                     |
| `i18n-ally.rename-key`                  | %extname%: %command.rename_key%                                     |
| `i18n-ally.extract-text`                | %extname%: %refactor.extract_text%                                  |
| `i18n-ally.extract-hard-strings-batch`  | %extname%: Extract all hard-coded strings (experimental)            |
| `i18n-ally.detect_hard_strings`         | %extname%: Detect hard-coded strings in current file (experimental) |
| `i18n-ally.open-url`                    | %extname%: %command.open_url%                                       |
| `i18n-ally.fulfill-keys`                | %extname%: %command.fulfill_keys%                                   |
| `i18n-ally.refresh-usage`               | %extname%: %command.refresh_usage%                                  |
| `i18n-ally.support`                     | %extname%: %feedback.support%                                       |
| `i18n-ally.locale-visibility-show`      | %extname%: %command.locale_visibility_show%                         |
| `i18n-ally.locale-visibility-hide`      | %extname%: %command.locale_visibility_hide%                         |
| `i18n-ally.new-key`                     | %extname%: %command.new_key%                                        |
| `i18n-ally.duplicate-key`               | %extname%: %command.duplicate_key%                                  |
| `i18n-ally.mark-key-as-in-use`          | %extname%: %command.mark_key_as_in_use%                             |
| `i18n-ally.open-in-editor`              | %extname%: %command.open_in_editor%                                 |
| `i18n-ally.open-editor`                 | %extname%: %command.open_editor%                                    |
| `i18n-ally.review.comment`              | %extname%: %review.leave_comment%                                   |
| `i18n-ally.review.approve`              | %extname%: %review.approve%                                         |
| `i18n-ally.review.request-change`       | %extname%: %review.request_change%                                  |
| `i18n-ally.review.edit`                 | %extname%: %review.edit%                                            |
| `i18n-ally.review.resolve`              | %review.resolve%                                                    |
| `i18n-ally.review.resolve-thread`       | %extname%: %review.resolve_all%                                     |
| `i18n-ally.review.apply-translation`    | %extname%: %review.apply_translation_candidate%                     |
| `i18n-ally.review.apply-suggestion`     | %extname%: %review.apply_suggestion%                                |
| `i18n-ally.insert-key`                  | %extname%: %command.insert_key%                                     |
| `i18n-ally.deepl-usage`                 | %extname%: %command.deepl_usage%                                    |
| `i18n-ally.go-to-range`                 | %extname%: %command.go_to_range%                                    |
| `i18n-ally.go-to-next-usage`            | %extname%: %command.go_to_next_usage%                               |
| `i18n-ally.go-to-prev-usage`            | %extname%: %command.go_to_prev_usage%                               |
| `i18n-ally.open-docs-hard-string`       | %extname%: %command.show_docs%                                      |
| `i18n-ally.extract-disable-auto-detect` | %extname%: %command.extract.disable-auto-detect%                    |
| `i18n-ally.extract-enable-auto-detect`  | %extname%: %command.extract.enable-auto-detect%                     |

## Configuration Json

```json
{
  //{ 
    /**
     * %config.disabled%
     * @key `i18n-ally.disabled`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.disabled': boolean
    /**
     * %config.auto_detection%
     * @key `i18n-ally.autoDetection`
     * @default `true`
     * @type `boolean`
     */
    'i18n-ally.autoDetection': boolean
    /**
     * %config.locales_paths%
     * @key `i18n-ally.localesPaths`
     * @default `undefined`
     * @type `string,array`
     */
    'i18n-ally.localesPaths'?: (string | (string | undefined)[] | undefined)
    /**
     * %config.encoding%
     * @key `i18n-ally.encoding`
     * @default `"utf-8"`
     * @type `string`
     */
    'i18n-ally.encoding': string
    /**
     * %config.source_language%
     * @key `i18n-ally.sourceLanguage`
     * @default `undefined`
     * @type `string`
     */
    'i18n-ally.sourceLanguage'?: (string | undefined)
    /**
     * %config.display_language%
     * @key `i18n-ally.displayLanguage`
     * @default `undefined`
     * @type `string`
     */
    'i18n-ally.displayLanguage'?: (string | undefined)
    /**
     * %config.ignored_locales%
     * @key `i18n-ally.ignoredLocales`
     * @default `undefined`
     * @type `array`
     */
    'i18n-ally.ignoredLocales'?: (unknown[] | undefined)
    /**
     * %config.keystyle%
     * @key `i18n-ally.keystyle`
     * @default `undefined`
     * @type `string`
     */
    'i18n-ally.keystyle'?: ("auto" | "nested" | "flat" | undefined)
    /**
     * %config.dir_structure%
     * @key `i18n-ally.dirStructure`
     * @default `undefined`
     * @type `string`
     */
    'i18n-ally.dirStructure'?: ("auto" | "file" | "dir" | undefined)
    /**
     * %config.annotations%
     * @key `i18n-ally.annotations`
     * @default `true`
     * @type `boolean`
     */
    'i18n-ally.annotations': boolean
    /**
     * %config.annotation_in_place%
     * @key `i18n-ally.annotationInPlace`
     * @default `true`
     * @type `boolean`
     */
    'i18n-ally.annotationInPlace': boolean
    /**
     * %config.annotation_max_length%
     * @key `i18n-ally.annotationMaxLength`
     * @default `40`
     * @type `number`
     */
    'i18n-ally.annotationMaxLength': number
    /**
     * %config.annotation_delimiter%
     * @key `i18n-ally.annotationDelimiter`
     * @default `"·"`
     * @type `string`
     */
    'i18n-ally.annotationDelimiter': string
    /**
     * %config.include_subfolders%
     * @key `i18n-ally.includeSubfolders`
     * @default `true`
     * @type `boolean`
     */
    'i18n-ally.includeSubfolders': boolean
    /**
     * %config.full_reload_on_changed%
     * @key `i18n-ally.fullReloadOnChanged`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.fullReloadOnChanged': boolean
    /**
     * %config.show_flags%
     * @key `i18n-ally.showFlags`
     * @default `true`
     * @type `boolean`
     */
    'i18n-ally.showFlags': boolean
    /**
     * %config.enabled_frameworks%
     * @key `i18n-ally.enabledFrameworks`
     * @default `undefined`
     * @type `array`
     */
    'i18n-ally.enabledFrameworks'?: (("vue" | "react" | "vscode" | "ngx-translate" | "i18next" | "react-i18next" | "i18next-shopify" | "i18n-tag" | "flutter" | "vue-sfc" | "ember" | "chrome-ext" | "ruby-rails" | "custom" | "laravel" | "transloco" | "svelte" | "globalize" | "ui5" | "next-translate" | "php-gettext" | "general" | "lingui" | "jekyll" | "fluent-vue" | "fluent-vue-sfc" | "next-intl" | "next-international" | undefined)[] | undefined)
    /**
     * %config.enabled_parsers%
     * @key `i18n-ally.enabledParsers`
     * @default `undefined`
     * @type `array`
     */
    'i18n-ally.enabledParsers'?: (("js" | "ts" | "json" | "json5" | "yaml" | "ini" | "po" | "php" | "properties" | "ftl" | undefined)[] | undefined)
    /**
     * %config.keys_in_use%
     * @key `i18n-ally.keysInUse`
     * @default `undefined`
     * @type `array`
     */
    'i18n-ally.keysInUse'?: ((string | undefined)[] | undefined)
    /**
     * %config.sort_keys%
     * @key `i18n-ally.sortKeys`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.sortKeys': boolean
    /**
     * %config.sort_compare%
     * @key `i18n-ally.sortCompare`
     * @default `"binary"`
     * @type `string`
     */
    'i18n-ally.sortCompare': ("binary" | "locale")
    /**
     * %config.sort_locale%
     * @key `i18n-ally.sortLocale`
     * @default `undefined`
     * @type `string`
     */
    'i18n-ally.sortLocale'?: (string | undefined)
    /**
     * %config.preferred_delimiter%
     * @key `i18n-ally.preferredDelimiter`
     * @default `"-"`
     * @type `string`
     */
    'i18n-ally.preferredDelimiter': string
    /**
     * %config.readonly%
     * @key `i18n-ally.readonly`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.readonly': boolean
    /**
     * %config.keep_fulfill%
     * @key `i18n-ally.keepFulfilled`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.keepFulfilled': boolean
    /**
     * %config.locale_country_map%
     * @key `i18n-ally.localeCountryMap`
     * @default `{}`
     * @type `object`
     */
    'i18n-ally.localeCountryMap': Record<string, unknown>
    /**
     * %config.indent%
     * @key `i18n-ally.indent`
     * @default `2`
     * @type `number`
     */
    'i18n-ally.indent': number
    /**
     * %config.disable_path_parsing%
     * @key `i18n-ally.disablePathParsing`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.disablePathParsing': boolean
    /**
     * %config.tab_style%
     * @key `i18n-ally.tabStyle`
     * @default `"space"`
     * @type `string`
     */
    'i18n-ally.tabStyle': ("space" | "tab")
    /**
     * %config.namespace%
     * @key `i18n-ally.namespace`
     * @default `undefined`
     * @type `boolean`
     */
    'i18n-ally.namespace'?: (boolean | undefined)
    /**
     * %config.path_matcher%
     * @key `i18n-ally.pathMatcher`
     * @default `undefined`
     * @type `string`
     */
    'i18n-ally.pathMatcher'?: (string | undefined)
    /**
     * %config.language_tag_system%
     * @key `i18n-ally.languageTagSystem`
     * @default `"bcp47"`
     * @type `string`
     */
    'i18n-ally.languageTagSystem': ("bcp47" | "legacy" | "none")
    /**
     * %config.ignore_files%
     * @key `i18n-ally.ignoreFiles`
     * @default `undefined`
     * @type `array`
     */
    'i18n-ally.ignoreFiles'?: ((string | undefined)[] | undefined)
    /**
     * 
     * @key `i18n-ally.theme.annotation`
     * @default `"rgba(153, 153, 153, .8)"`
     * @type `string`
     */
    'i18n-ally.theme.annotation': string
    /**
     * 
     * @key `i18n-ally.theme.annotationMissing`
     * @default `"rgba(153, 153, 153, .3)"`
     * @type `string`
     */
    'i18n-ally.theme.annotationMissing': string
    /**
     * 
     * @key `i18n-ally.theme.annotationBorder`
     * @default `"rgba(153, 153, 153, .2)"`
     * @type `string`
     */
    'i18n-ally.theme.annotationBorder': string
    /**
     * 
     * @key `i18n-ally.theme.annotationMissingBorder`
     * @default `"rgba(153, 153, 153, .2)"`
     * @type `string`
     */
    'i18n-ally.theme.annotationMissingBorder': string
    /**
     * %config.regex_key%
     * @key `i18n-ally.regex.key`
     * @default `undefined`
     * @type `string`
     */
    'i18n-ally.regex.key'?: (string | undefined)
    /**
     * %config.regex_usage_match%
     * @key `i18n-ally.regex.usageMatch`
     * @default `undefined`
     * @type `array`
     */
    'i18n-ally.regex.usageMatch'?: ((string | undefined)[] | undefined)
    /**
     * %config.regex_usage_match_append%
     * @key `i18n-ally.regex.usageMatchAppend`
     * @default `undefined`
     * @type `array`
     */
    'i18n-ally.regex.usageMatchAppend'?: ((string | undefined)[] | undefined)
    /**
     * %config.refactor_templates%
     * @key `i18n-ally.refactor.templates`
     * @default `undefined`
     * @type `array`
     */
    'i18n-ally.refactor.templates'?: ({ 
    /**
     * 
     * @key `source`
     * @default `undefined`
     * @type `string`
     */
    'source'?: ("html-attribute" | "html-inline" | "js-string" | "js-template" | "jsx-text" | undefined)
    /**
     * 
     * @key `template`
     * @default `undefined`
     * @type `string`
     */
    'template'?: (string | undefined)
    /**
     * 
     * @key `templates`
     * @default `undefined`
     * @type `array`
     */
    'templates'?: ((string | undefined)[] | undefined)
    /**
     * 
     * @key `include`
     * @default `undefined`
     * @type `array`
     */
    'include'?: ((string | undefined)[] | undefined)
    /**
     * 
     * @key `exclude`
     * @default `undefined`
     * @type `array`
     */
    'exclude'?: ((string | undefined)[] | undefined) }[] | undefined)
    /**
     * %config.translate_save_as_candidates%
     * @key `i18n-ally.translate.saveAsCandidates`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.translate.saveAsCandidates': boolean
    /**
     * %config.translate.fallbackToKey%
     * @key `i18n-ally.translate.fallbackToKey`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.translate.fallbackToKey': boolean
    /**
     * %config.translate.engines%
     * @key `i18n-ally.translate.engines`
     * @default `["google"]`
     * @type `array`
     */
    'i18n-ally.translate.engines': ("google" | "google-cn" | "deepl" | "libretranslate" | "baidu" | "openai" | undefined)[]
    /**
     * %config.translate.parallels%
     * @key `i18n-ally.translate.parallels`
     * @default `5`
     * @type `number`
     */
    'i18n-ally.translate.parallels': number
    /**
     * %config.prompt_translating_source%
     * @key `i18n-ally.translate.promptSource`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.translate.promptSource': boolean
    /**
     * %config.translate_override_existing%
     * @key `i18n-ally.translate.overrideExisting`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.translate.overrideExisting': boolean
    /**
     * %config.google_api_key%
     * @key `i18n-ally.translate.google.apiKey`
     * @default `null`
     * @type `string`
     */
    'i18n-ally.translate.google.apiKey': (string | null)
    /**
     * %config.deepl_api_key%
     * @key `i18n-ally.translate.deepl.apiKey`
     * @default `null`
     * @type `string`
     */
    'i18n-ally.translate.deepl.apiKey': (string | null)
    /**
     * %config.baidu_appid%
     * @key `i18n-ally.translate.baidu.appid`
     * @default `null`
     * @type `string`
     */
    'i18n-ally.translate.baidu.appid': (string | null)
    /**
     * %config.baidu_app_secret%
     * @key `i18n-ally.translate.baidu.apiSecret`
     * @default `null`
     * @type `string`
     */
    'i18n-ally.translate.baidu.apiSecret': (string | null)
    /**
     * %config.deepl_log%
     * @key `i18n-ally.translate.deepl.enableLog`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.translate.deepl.enableLog': boolean
    /**
     * %config.deepl_use_free_api_entry%
     * @key `i18n-ally.translate.deepl.useFreeApiEntry`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.translate.deepl.useFreeApiEntry': boolean
    /**
     * %config.libretranslate_api_root%
     * @key `i18n-ally.translate.libre.apiRoot`
     * @default `"http://localhost:5000"`
     * @type `string`
     */
    'i18n-ally.translate.libre.apiRoot': string
    /**
     * %config.openai_api_key%
     * @key `i18n-ally.translate.openai.apiKey`
     * @default `null`
     * @type `string`
     */
    'i18n-ally.translate.openai.apiKey': (string | null)
    /**
     * %config.openai_api_root%
     * @key `i18n-ally.translate.openai.apiRoot`
     * @default `"https://api.openai.com"`
     * @type `string`
     */
    'i18n-ally.translate.openai.apiRoot': string
    /**
     * %config.openai_api_model%
     * @key `i18n-ally.translate.openai.apiModel`
     * @default `"gpt-3.5-turbo"`
     * @type `string`
     */
    'i18n-ally.translate.openai.apiModel': ("gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0301" | "gpt-3.5-turbo-0613" | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-32k-0314" | "gpt-4-32k-0613")
    /**
     * %config.usage.scanning_ignore%
     * @key `i18n-ally.usage.scanningIgnore`
     * @default `undefined`
     * @type `array`
     */
    'i18n-ally.usage.scanningIgnore'?: ((string | undefined)[] | undefined)
    /**
     * %config.derived_keys%
     * @key `i18n-ally.usage.derivedKeyRules`
     * @default `null`
     * @type `array`
     */
    'i18n-ally.usage.derivedKeyRules': ((string | undefined)[] | null)
    /**
     * 
     * @key `i18n-ally.frameworks.ruby-rails.scopeRoot`
     * @default `"app/views"`
     * @type `string`
     */
    'i18n-ally.frameworks.ruby-rails.scopeRoot': string
    /**
     * 
     * @key `i18n-ally.parsers.typescript.tsNodePath`
     * @default `"node_modules/ts-node/dist/bin.js"`
     * @type `string`
     */
    'i18n-ally.parsers.typescript.tsNodePath': string
    /**
     * 
     * @key `i18n-ally.parsers.typescript.compilerOptions`
     * @default `{}`
     * @type `object`
     */
    'i18n-ally.parsers.typescript.compilerOptions': Record<string, unknown>
    /**
     * 
     * @key `i18n-ally.parsers.extendFileExtensions`
     * @default `{}`
     * @type `object`
     */
    'i18n-ally.parsers.extendFileExtensions': Record<string, unknown>
    /**
     * %config.review_enabled%
     * @key `i18n-ally.review.enabled`
     * @default `true`
     * @type `boolean`
     */
    'i18n-ally.review.enabled': boolean
    /**
     * %config.review_gutters%
     * @key `i18n-ally.review.gutters`
     * @default `true`
     * @type `boolean`
     */
    'i18n-ally.review.gutters': boolean
    /**
     * %config.review_username%
     * @key `i18n-ally.review.user.name`
     * @default `undefined`
     * @type `string`
     */
    'i18n-ally.review.user.name'?: (string | undefined)
    /**
     * %config.review_email%
     * @key `i18n-ally.review.user.email`
     * @default `undefined`
     * @type `string`
     */
    'i18n-ally.review.user.email'?: (string | undefined)
    /**
     * %config.review_remove_on_resolved%
     * @key `i18n-ally.review.removeCommentOnResolved`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.review.removeCommentOnResolved': boolean
    /**
     * %config.editor_prefer_editor%
     * @key `i18n-ally.editor.preferEditor`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.editor.preferEditor': boolean
    /**
     * %config.keygen_strategy%
     * @key `i18n-ally.extract.keygenStrategy`
     * @default `"slug"`
     * @type `string`
     */
    'i18n-ally.extract.keygenStrategy': ("slug" | "random" | "empty" | "source")
    /**
     * %config.keygen_style%
     * @key `i18n-ally.extract.keygenStyle`
     * @default `"default"`
     * @type `string`
     */
    'i18n-ally.extract.keygenStyle': ("default" | "kebab-case" | "snake_case" | "camelCase" | "PascalCase" | "ALL_CAPS")
    /**
     * %config.key_prefix%
     * @key `i18n-ally.extract.keyPrefix`
     * @default `""`
     * @type `string`
     */
    'i18n-ally.extract.keyPrefix': string
    /**
     * %config.key_max_length%
     * @key `i18n-ally.extract.keyMaxLength`
     * @default `null`
     * @type `number`
     */
    'i18n-ally.extract.keyMaxLength': (number | null)
    /**
     * %config.target_picking_strategy%
     * @key `i18n-ally.extract.targetPickingStrategy`
     * @default `"none"`
     * @type `string`
     */
    'i18n-ally.extract.targetPickingStrategy': ("none" | "most-similar" | "most-similar-by-key" | "file-previous" | "global-previous")
    /**
     * Parser options for extracting HTML, see https://github.com/lokalise/i18n-ally/blob/master/src/extraction/parsers/options.ts
     * @key `i18n-ally.extract.parsers.html`
     * @default `{}`
     * @type `object`
     */
    'i18n-ally.extract.parsers.html': Record<string, unknown>
    /**
     * Parser options for extracting JS/TS/JSX/TSX, see https://github.com/lokalise/i18n-ally/blob/master/src/extraction/parsers/options.ts
     * @key `i18n-ally.extract.parsers.babel`
     * @default `{}`
     * @type `object`
     */
    'i18n-ally.extract.parsers.babel': Record<string, unknown>
    /**
     * Enables hard-coded strings detection automatically whenever opening a supported file
     * @key `i18n-ally.extract.autoDetect`
     * @default `false`
     * @type `boolean`
     */
    'i18n-ally.extract.autoDetect': boolean
    /**
     * Strings to be ignored on hard-coded strings detection
     * @key `i18n-ally.extract.ignored`
     * @default `undefined`
     * @type `array`
     */
    'i18n-ally.extract.ignored'?: ((string | undefined)[] | undefined)
    /**
     * Strings to be ignored on hard-coded strings detection, by files
     * @key `i18n-ally.extract.ignoredByFiles`
     * @default `{}`
     * @type `object`
     */
    'i18n-ally.extract.ignoredByFiles': Record<string, unknown>
    /**
     * 
     * @key `i18n-ally.parserOptions`
     * @default `undefined`
     * @type `object`
     */
    'i18n-ally.parserOptions'?: Record<string, unknown>
    /**
     * %config.default_namespace%
     * @key `i18n-ally.defaultNamespace`
     * @default `undefined`
     * @type `string`
     */
    'i18n-ally.defaultNamespace'?: (string | undefined)
    /**
     * 
     * @key `i18n-ally.derivedKeyRules`
     * @default `undefined`
     * @type `undefined`
     */
    'i18n-ally.derivedKeyRules'?: (unknown | undefined)
    /**
     * 
     * @key `i18n-ally.filenameMatchRegex`
     * @default `undefined`
     * @type `undefined`
     */
    'i18n-ally.filenameMatchRegex'?: (unknown | undefined)
    /**
     * 
     * @key `i18n-ally.fileNamespace`
     * @default `undefined`
     * @type `undefined`
     */
    'i18n-ally.fileNamespace'?: (unknown | undefined)
    /**
     * 
     * @key `i18n-ally.keyMatchRegex`
     * @default `undefined`
     * @type `undefined`
     */
    'i18n-ally.keyMatchRegex'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.localesPaths`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.localesPaths'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.encoding`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.encoding'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.sourceLanguage`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.sourceLanguage'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.displayLanguage`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.displayLanguage'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.ignoredLocales`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.ignoredLocales'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.keystyle`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.keystyle'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.dirStructure`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.dirStructure'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.annotations`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.annotations'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.annotationMaxLength`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.annotationMaxLength'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.annotationDelimiter`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.annotationDelimiter'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.filenameMatchRegex`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.filenameMatchRegex'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.includeSubfolders`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.includeSubfolders'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.fullReloadOnChanged`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.fullReloadOnChanged'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.sortKeys`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.sortKeys'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.preferredDelimiter`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.preferredDelimiter'?: (unknown | undefined)
    /**
     * 
     * @key `vue-i18n-ally.readonly`
     * @default `undefined`
     * @type `undefined`
     */
    'vue-i18n-ally.readonly'?: (unknown | undefined) }
  //
  "0": See package.json,

}
```

## Configuration

| Key | Description | Type     | Default          |
| --- | ----------- | -------- | ---------------- |
| `0` |             | `object` | See package.json |