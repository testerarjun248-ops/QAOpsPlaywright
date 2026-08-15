// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=(
  {
  testDir: './tests',
//npm   workers:1,
  timeout: 30 * 1000,
  expect :
  {
     timeout: 5000
    },
  reporter: 'html',
  
  use: {
   
   browserName: 'chromium',
   headless : false,
   //actionTimeout: 10*1000,
   navigationTimeout: 30*1000,
   screenshot: 'on',
   trace: 'on',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  
  }

  });
  module.exports=config

