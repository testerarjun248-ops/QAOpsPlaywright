// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=(
  {
  testDir: './tests',
   retries:2,
   workers:7,
  timeout: 30 * 1000,
  expect :
  {
     timeout: 5000
    },
  reporter: 'html',
  
  projects : [
{
  name: 'chrome',
  use:
  {
   
   browserName: 'chromium',
   headless : false,
   //actionTimeout: 10*1000,
   navigationTimeout: 30*1000,
   screenshot: 'on',
   trace: 'retain-on-failure',
   ignoreHttpsErrors:true,
   permissions:['geolocation'],
   video: 'retain-on-failure',
   //viewport: {width:720,height:720} or test would fail
  }
}
]
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  
  }

  );
  module.exports=config

