    'use strict';

    // Compiled from SecLists ( )
    var secret_list = [
        'ConsumerKey', 'ConsumerSecret', 'DB_USERNAME', 'HEROKU_API_KEY',
        'HOMEBREW_GITHUB_API_TOKEN', 'JEKYLL_GITHUB_TOKEN', 'PT_TOKEN', 'SESSION_TOKEN',
        'SF_USERNAME', 'SLACK_BOT_TOKEN', 'access-token', 'access_token', 'access_token_secret',
        'accesstoken', 'admin', 'api-key', 'api_key', 'api_secret_key', 'api_token',
        'auth_token', 'authkey', 'authorization', 'authorization_key', 'authorization_token',
        'authtoken', 'aws_access_key_id', 'aws_secret_access_key', 'bearer', 'bot_access_token',
        'bucket', 'client-secret', 'client_id', 'client_key', 'client_secret', 'clientsecret',
        'consumer_key', 'consumer_secret', 'dbpasswd', 'email', 'encryption-key', 'encryption_key',
        'encryptionkey', 'id_dsa', 'irc_pass', 'key', 'oauth_token', 'pass', 'password', 'private_key',
        'private-key', 'privatekey', 'secret', 'secret-key', 'secret_key', 'secret_token', 'secretkey',
        'secretkey', 'session_key', 'session_secret', 'slack_api_token', 'slack_secret_token', 'slack_token',
        'ssh-key', 'ssh_key', 'sshkey', 'token', 'username', 'xoxa-2', 'xoxr', 'clientid',
        'AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'AMAZON_AWS_ACCESS_KEY_ID', 'AMAZON_AWS_SECRET_ACCESS_KEY',
        'ALGOLIA_API_KEY', 'AZURE_CLIENT_ID', 'AZURE_CLIENT_SECRET', 'AZURE_USERNAME',
        'AZURE_PASSWORD', 'MSI_ENDPOINT', 'MSI_SECRET', 'binance_api', 'binance_secret', 'BITTREX_API_KEY',
        'BITTREX_API_SECRET', 'CF_PASSWORD', 'CF_USERNAME', 'CODECLIMATE_REPO_TOKEN', 'COVERALLS_REPO_TOKEN', 'CIRCLE_TOKEN',
        'DIGITALOCEAN_ACCESS_TOKEN', 'DOCKER_EMAIL', 'DOCKER_PASSWORD', 'DOCKER_USERNAME',
        'DOCKERHUB_PASSWORD', 'FACEBOOK_APP_ID', 'FACEBOOK_APP_SECRET', 'FACEBOOK_ACCESS_TOKEN', 'FIREBASE_TOKEN',
        'FIREBASE_API_TOKEN', 'FOSSA_API_KEY', 'GH_TOKEN', 'GH_ENTERPRISE_TOKEN', 'CI_DEPLOY_PASSWORD', 'CI_DEPLOY_USER',
        'GOOGLE_APPLICATION_CREDENTIALS', 'GOOGLE_API_KEY', 'CI_DEPLOY_USER', 'CI_DEPLOY_PASSWORD', 'GITLAB_USER_LOGIN',
        'CI_JOB_JWT', 'CI_JOB_JWT_V2', 'CI_JOB_TOKEN', 'HEROKU_API_KEY', 'HEROKU_API_USER', 'MAILGUN_API_KEY',
        'MCLI_PRIVATE_API_KEY', 'MCLI_PUBLIC_API_KEY', 'NGROK_TOKEN', 'NGROK_AUTH_TOKEN', 'NPM_AUTH_TOKEN', 'OKTA_CLIENT_ORGURL',
        'OKTA_CLIENT_TOKEN', 'OKTA_OAUTH2_CLIENTSECRET', 'OKTA_OAUTH2_CLIENTID', 'OKTA_AUTHN_GROUPID',
        'OS_USERNAME', 'OS_PASSWORD', 'PERCY_TOKEN', 'POSTGRES_PASSWORD', 'SAUCE_ACCESS_KEY', 'SAUCE_USERNAME',
        'SENTRY_AUTH_TOKEN', 'SLACK_TOKEN', 'square_access_token', 'square_oauth_secret', 'STRIPE_API_KEY', 'STRIPE_DEVICE_NAME',
        'SURGE_TOKEN', 'SURGE_LOGIN', 'TWILIO_ACCOUNT_SID', 'CONSUMER_KEY', 'CONSUMER_SECRET', 'TRAVIS_SUDO', 'TRAVIS_OS_NAME',
        'TRAVIS_SECURE_ENV_VARS', 'TELEGRAM_BOT_TOKEN', 'VAULT_TOKEN', 'VAULT_CLIENT_KEY', 'TOKEN', 'VULTR_ACCESS', 'VULTR_SECRET',
        'adafruit-api-key', 'adobe-client-id', 'adobe-client-secret', 'age-secret-key', 'airtable-api-key', 'algolia-api-key', 'alibaba-access-key-id', 'alibaba-secret-key',
        'asana-client-id', 'asana-client-secret', 'atlassian-api-token', 'authress-service-client-access-key', 'aws-access-token', 'beamer-api-token', 'bitbucket-client-id', 'bitbucket-client-secret',
        'bittrex-access-key', 'bittrex-secret-key', 'clojars-api-token', 'cloudflare-api-key', 'cloudflare-global-api-key', 'cloudflare-origin-ca-key', 'codecov-access-token', 'coinbase-access-token',
        'confluent-access-token', 'confluent-secret-key', 'contentful-delivery-api-token', 'databricks-api-token', 'datadog-access-token', 'defined-networking-api-token', 'digitalocean-access-token', 'digitalocean-pat',
        'digitalocean-refresh-token', 'discord-api-token', 'discord-client-id', 'discord-client-secret', 'doppler-api-token', 'droneci-access-token', 'dropbox-api-token', 'dropbox-long-lived-api-token',
        'dropbox-short-lived-api-token', 'duffel-api-token', 'dynatrace-api-token', 'easypost-api-token', 'easypost-test-api-token', 'etsy-access-token', 'facebook-access-token', 'facebook-page-access-token',
        'facebook-secret', 'fastly-api-token', 'finicity-api-token', 'finicity-client-secret', 'finnhub-access-token', 'flickr-access-token', 'flutterwave-encryption-key', 'flutterwave-public-key',
        'flutterwave-secret-key', 'frameio-api-token', 'freshbooks-access-token', 'gcp-api-key', 'generic-api-key', 'github-app-token', 'github-fine-grained-pat', 'github-oauth',
        'github-pat', 'github-refresh-token', 'gitlab-pat', 'gitlab-ptt', 'gitlab-rrt', 'gitter-access-token', 'gocardless-api-token', 'grafana-api-key',
        'grafana-cloud-api-token', 'grafana-service-account-token', 'harness-api-key', 'hashicorp-tf-api-token', 'hashicorp-tf-password', 'heroku-api-key', 'hubspot-api-key', 'huggingface-access-token',
        'huggingface-organization-api-token', 'infracost-api-token', 'intercom-api-key', 'intra42-client-secret', 'jfrog-api-key', 'jfrog-identity-token', 'jwt', 'jwt-base64',
        'kraken-access-token', 'kucoin-access-token', 'kucoin-secret-key', 'launchdarkly-access-token', 'linear-api-key', 'linear-client-secret', 'linkedin-client-id', 'linkedin-client-secret',
        'lob-api-key', 'lob-pub-api-key', 'mailchimp-api-key', 'mailgun-private-api-token', 'mailgun-pub-key', 'mailgun-signing-key', 'mapbox-api-token', 'mattermost-access-token',
        'messagebird-api-token', 'messagebird-client-id', 'microsoft-teams-webhook', 'netlify-access-token', 'new-relic-browser-api-token', 'new-relic-insert-key', 'new-relic-user-api-id', 'new-relic-user-api-key',
        'npm-access-token', 'nytimes-access-token', 'okta-access-token', 'openai-api-key', 'plaid-api-token', 'plaid-client-id', 'plaid-secret-key', 'planetscale-api-token',
        'planetscale-oauth-token', 'planetscale-password', 'postman-api-token', 'prefect-api-token', 'private-key', 'pulumi-api-token', 'pypi-upload-token', 'rapidapi-access-token',
        'readme-api-token', 'rubygems-api-token', 'scalingo-api-token', 'sendbird-access-id', 'sendbird-access-token', 'sendgrid-api-token', 'sendinblue-api-token', 'sentry-access-token',
        'shippo-api-token', 'shopify-access-token', 'shopify-custom-access-token', 'shopify-private-app-access-token', 'shopify-shared-secret', 'sidekiq-secret', 'sidekiq-sensitive-url', 'slack-app-token',
        'slack-bot-token', 'slack-config-access-token', 'slack-config-refresh-token', 'slack-legacy-bot-token', 'slack-legacy-token', 'slack-legacy-workspace-token', 'slack-user-token', 'slack-webhook-url',
        'snyk-api-token', 'square-access-token', 'squarespace-access-token', 'stripe-access-token', 'sumologic-access-id', 'sumologic-access-token', 'telegram-bot-api-token', 'travisci-access-token',
        'twilio-api-key', 'twitch-api-token', 'twitter-access-secret', 'twitter-access-token', 'twitter-api-key', 'twitter-api-secret', 'twitter-bearer-token', 'typeform-api-token',
        'vault-batch-token', 'vault-service-token', 'yandex-access-token', 'yandex-api-key', 'yandex-aws-access-token', 'zendesk-secret-key'
    ];

    // v--Regex and some ID's --^ pulled from gitleaks
    // https://raw.githubusercontent.com/gitleaks/gitleaks/master/config/gitleaks.toml

    var regexes = [
        /(?:adafruit)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9_-]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:adobe)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b((p8e-)[a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /AGE-SECRET-KEY-1[QPZRY9X8GF2TVDW0S3JN54KHCE6MUA7L]{58}/,
        /(?:airtable)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{17})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:algolia)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b((LTAI)[a-z0-9]{20})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:alibaba)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{30})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:asana)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([0-9]{16})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:asana)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:atlassian|confluence|jira)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{24})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b((?:sc|ext|scauth|authress)_[a-z0-9]{5,30}\.[a-z0-9]{4,6}\.acc[_-][a-z0-9-]{10,32}\.[a-z0-9+/_=-]{30,120})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z0-9]{16}/,
        /(?:beamer)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(b_[a-z0-9=_\-]{44})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:bitbucket)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:bitbucket)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:bittrex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:bittrex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(CLOJARS_)[a-z0-9]{60}/,
        /(?:cloudflare)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9_-]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:cloudflare)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{37})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(v1\.0-[a-f0-9]{24}-[a-f0-9]{146})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:codecov)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:coinbase)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9_-]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:confluent)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{16})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:confluent)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:contentful)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{43})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(dapi[a-h0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:datadog)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:dnkey)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(dnkey-[a-z0-9=_\-]{26}-[a-z0-9=_\-]{52})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(doo_v1_[a-f0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(dop_v1_[a-f0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(dor_v1_[a-f0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:discord)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:discord)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([0-9]{18})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:discord)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(dp\.pt\.)[a-z0-9]{43}/,
        /(?:droneci)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:dropbox)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{15})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:dropbox)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{11}(AAAAAAAAAA)[a-z0-9\-_=]{43})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:dropbox)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(sl\.[a-z0-9\-=_]{135})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /duffel_(test|live)_[a-z0-9_\-=]{43}/,
        /dt0c01\.[a-z0-9]{24}\.[a-z0-9]{64}/,
        /\bEZAK[a-z0-9]{54}/,
        /\bEZTK[a-z0-9]{54}/,
        /(?:etsy)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{24})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(\d{15,16}(\||%)[0-9a-z\-_]{27,40})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(EAA[MC][a-z0-9]{20,})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:facebook)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:fastly)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:finicity)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:finicity)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{20})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:finnhub)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{20})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:flickr)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /FLWSECK_TEST-[a-h0-9]{12}/,
        /FLWPUBK_TEST-[a-h0-9]{32}-X/,
        /FLWSECK_TEST-[a-h0-9]{32}-X/,
        /fio-u-[a-z0-9\-_=]{64}/,
        /(?:freshbooks)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(AIza[0-9A-Za-z\\-_]{35})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:key|api|token|secret|client|passwd|password|auth|access)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([0-9a-z\-_.=]{10,150})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(ghu|ghs)_[0-9a-zA-Z]{36}/,
        /github_pat_[0-9a-zA-Z_]{82}/,
        /gho_[0-9a-zA-Z]{36}/,
        /ghp_[0-9a-zA-Z]{36}/,
        /ghr_[0-9a-zA-Z]{36}/,
        /glpat-[0-9a-zA-Z\-\_]{20}/,
        /glptt-[0-9a-f]{40}/,
        /GR1348941[0-9a-zA-Z\-\_]{20}/,
        /(?:gitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9_-]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:gocardless)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(live_[a-z0-9\-_=]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(eyJrIjoi[A-Za-z0-9]{70,400}={0,2})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(glc_[A-Za-z0-9+/]{32,400}={0,2})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /((?:pat|sat)\.[a-zA-Z0-9]{22}\.[a-zA-Z0-9]{24}\.[a-zA-Z0-9]{20})/,
        /[a-z0-9]{14}\.atlasv1\.[a-z0-9\-_=]{60,70}/,
        /(?:administrator_login_password|password)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}("[a-z0-9=_\-]{8,20}")(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:heroku)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:hubspot)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:^|[\\'"` >=:])(hf_[a-zA-Z]{34})(?:$|[\\'"` <])/,
        /(?:^|[\\'"` >=:\(,)])(api_org_[a-zA-Z]{34})(?:$|[\\'"` <\),])/,
        /\b(ico-[a-zA-Z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:intercom)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{60})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(s-s4t2(?:ud|af)-[abcdef0123456789]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:jfrog|artifactory|bintray|xray)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{73})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:jfrog|artifactory|bintray|xray)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(ey[a-zA-Z0-9]{17,}\.ey[a-zA-Z0-9\/\\_-]{17,}\.(?:[a-zA-Z0-9\/\\_-]{10,}={0,2})?)(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:kraken)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9\/=_\+\-]{80,90})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:kucoin)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{24})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:kucoin)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:launchdarkly)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /lin_api_[a-z0-9]{40}/,
        /(?:linear)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:linkedin|linked-in)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{14})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:linkedin|linked-in)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{16})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:lob)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}((live|test)_[a-f0-9]{35})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:lob)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}((test|live)_pub_[a-f0-9]{31})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:MailchimpSDK.initialize|mailchimp)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{32}-us\d\d)(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:mailgun)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(key-[a-f0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:mailgun)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(pubkey-[a-f0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:mailgun)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-h0-9]{32}-[a-h0-9]{8}-[a-h0-9]{8})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:mapbox)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(pk\.[a-z0-9]{60}\.[a-z0-9]{22})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:mattermost)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{26})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:messagebird|message-bird|message_bird)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{25})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:messagebird|message-bird|message_bird)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /https:\/\/[a-z0-9]+\.webhook\.office\.com\/webhookb2\/[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}@[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}\/IncomingWebhook\/[a-z0-9]{32}\/[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}/,
        /(?:netlify)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{40,46})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:new-relic|newrelic|new_relic)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(NRJS-[a-f0-9]{19})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:new-relic|newrelic|new_relic)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(NRII-[a-z0-9-]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:new-relic|newrelic|new_relic)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:new-relic|newrelic|new_relic)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(NRAK-[a-z0-9]{27})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(npm_[a-z0-9]{36})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:nytimes|new-york-times,|newyorktimes)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:okta)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{42})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(sk-[a-zA-Z0-9]{20}T3BlbkFJ[a-zA-Z0-9]{20})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:plaid)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(access-(?:sandbox|development|production)-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:plaid)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{24})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:plaid)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{30})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(pscale_tkn_[a-z0-9=\-_\.]{32,64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(pscale_oauth_[a-z0-9=\-_\.]{32,64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(pscale_pw_[a-z0-9=\-_\.]{32,64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(PMAK-[a-f0-9]{24}\-[a-f0-9]{34})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(pnu_[a-z0-9]{36})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /-----BEGIN[ A-Z0-9_-]{0,100}PRIVATE KEY( BLOCK)?-----[\s\S-]*KEY( BLOCK)?----/,
        /\b(pul-[a-f0-9]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /pypi-AgEIcHlwaS5vcmc[A-Za-z0-9\-_]{50,1000}/,
        /(?:rapidapi)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9_-]{50})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(rdme_[a-z0-9]{70})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(rubygems_[a-f0-9]{48})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(tk-us-[a-zA-Z0-9-_]{48})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:sendbird)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:sendbird)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(SG\.[a-z0-9=_\-\.]{66})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(xkeysib-[a-f0-9]{64}\-[a-z0-9]{16})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:sentry)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(shippo_(live|test)_[a-f0-9]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /shpat_[a-fA-F0-9]{32}/,
        /shpca_[a-fA-F0-9]{32}/,
        /shppa_[a-fA-F0-9]{32}/,
        /shpss_[a-fA-F0-9]{32}/,
        /(?:BUNDLE_ENTERPRISE__CONTRIBSYS__COM|BUNDLE_GEMS__CONTRIBSYS__COM)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{8}:[a-f0-9]{8})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(http(?:s??):\/\/)([a-f0-9]{8}:[a-f0-9]{8})@(?:gems.contribsys.com|enterprise.contribsys.com)(?:[\/|\#|\?|:]|$)/,
        /(xapp-\d-[A-Z0-9]+-\d+-[a-z0-9]+)/,
        /(xoxb-[0-9]{10,13}\-[0-9]{10,13}[a-zA-Z0-9-]*)/,
        /(xoxe.xox[bp]-\d-[A-Z0-9]{163,166})/,
        /(xoxe-\d-[A-Z0-9]{146})/,
        /(xoxb-[0-9]{8,14}\-[a-zA-Z0-9]{18,26})/,
        /(xox[os]-\d+-\d+-\d+-[a-fA-F\d]+)/,
        /(xox[ar]-(?:\d-)?[0-9a-zA-Z]{8,48})/,
        /(xox[pe](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34})/,
        /(https?:\/\/)?hooks.slack.com\/(services|workflows)\/[A-Za-z0-9+\/]{43,46}/,
        /(?:snyk_token|snyk_key|snyk_api_token|snyk_api_key|snyk_oauth_token)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b((EAAA|sq0atp-)[0-9A-Za-z\-_]{22,60})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:squarespace)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b((sk|rk)_(test|live|prod)_[0-9a-z]{10,99})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:sumo)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:travis)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{22})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /SK[0-9a-fA-F]{32}/,
        /(?:twitch)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{30})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{45})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([0-9]{15,25}-[a-zA-Z0-9]{20,40})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{25})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{50})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(A{22}[a-zA-Z0-9%]{80,100})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:typeform)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(tfp_[a-z0-9\-_\.=]{59})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(hvb\.[a-z0-9_-]{138,212})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /\b(hvs\.[a-z0-9_-]{90,100})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:yandex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(t1\.[A-Z0-9a-z_-]+[=]{0,2}\.[A-Z0-9a-z_-]{86}[=]{0,2})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:yandex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(AQVN[A-Za-z0-9_\-]{35,38})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:yandex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}(YC[a-zA-Z0-9_\-]{38})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(?:zendesk)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/,
        /(meme)li/,
		/horizontal/
    ];
    var found = [];
	
	var secrets_el = document.getElementById('secrets-list');
	secrets_el.value = secret_list.join("\n");
	console.log(browser.browserAction.getBadgeText);
	
	

    secret_list.forEach(function(secret) {
        var selector = '[id*="' + secret + '"]';

        document.querySelectorAll(selector).forEach(function(hit) {
            found.push(hit);
            console.log('id_match: ' + secret);
        });
    });

	//console.log(`Found a total of ${found.length} / ${secret_list.length}`);

    var matched_regs = 0;

    regexes.forEach(function(r) {
		var cur_regex = r;

        jQuery("input").each(function(i) {
			var input_val = $(this).val();
			var input_len = input_val.length;
			var input_type = $(this).type;

			if (input_len > 3 && input_type != "password" && input_type != "hidden") {
				if (input_val.match(cur_regex)) {
                    matched_regs++;
                    found.push(i);
                    console.log('regex_match ' + input_val);
				}
            }
        });
    });

    console.log(`Matched ${matched_regs} / ${regexes.length}`);

    found.forEach(function(f) {
        if (f.type != 'password' && f.type != 'hidden') {
            if (f.value && f.value.length) {
                var holder = document.createElement('a');
                holder.id = f.id + '-masked';
                holder.setAttribute('value', f.value);
                holder.innerHTML = '✂️';

                f.before(holder);
                f.type = 'password';
            }

            jQuery("a[id$=-masked").on("click", function (id) {
                navigator.clipboard.writeText(document.getElementById(id.target.id).attributes.value.value);
            });
        }
    });
