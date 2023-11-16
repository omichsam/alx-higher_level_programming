#!/usr/bin/node

const { dict } = require('./101-data');

const occurrencesByUserId = {};

for (const userId in dict) {
  const occurrences = dict[userId];

  if (!occurrencesByUserId[occurrences]) {
    occurrencesByUserId[occurrences] = [];
  }

  occurrencesByUserId[occurrences].push(userId);
}

console.log(occurrencesByUserId);
