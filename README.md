# frozen chrome

## to reproduce

1. open dev tools -> ember-inspector -> data tab
2. click `freeze` button
3. in ember-inspector, click `human` and expand id: 1
4. click `chosen` or `choices`, either relationship.
5. the tab should freeze and the memory and cpu usage will spike
