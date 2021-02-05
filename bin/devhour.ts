#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DevhourStack } from '../lib/devhour-stack';

const app = new cdk.App();
new DevhourStack(app, 'DevhourStack');
