module.exports = {
    apps : [{
      name: 'angularci',
      script: 'node_modules/@angular/cli/bin/ng',
      args: 'serve --host 0.0.0.0 --disable-host-check --port 8080',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }],
  
    deploy : {
    }
  };