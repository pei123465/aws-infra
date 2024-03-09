#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { stgParameter } from '../parameter';
import { prodParameter } from '../parameter';
import { GithubAction20240309Stack } from '../lib/github_action_20240309-stack';

const app = new cdk.App();

const argContext = 'env';
const envKey = app.node.tryGetContext(argContext);
if (envKey == undefined)
  throw new Error(`Please specify environment with context option. ex) cdk deploy -c ${argContext}=dev`);

const properties = getProperties(envKey)

  new GithubAction20240309Stack(app, `${properties.envName}GithubAction20240309Stack`, {
  env: properties.env,
});

function getProperties(envKey: String) {
  if (envKey === "stg") {
    return stgParameter
  } else if (envKey === "prod") {
    return prodParameter
  }  else {
    throw new Error("No Support environment")
  }
}