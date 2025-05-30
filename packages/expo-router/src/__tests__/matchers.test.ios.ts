import {
  matchDynamicName,
  getNameFromFilePath,
  matchGroupName,
  stripGroupSegmentsFromPath,
  matchArrayGroupName,
  matchLastGroupName,
} from '../matchers';

describe(stripGroupSegmentsFromPath, () => {
  it(`strips group segments, preserving initial slash`, () => {
    expect(stripGroupSegmentsFromPath('/[[...foobar]]/(foo)/bar/[bax]/(other)')).toBe(
      '/[[...foobar]]/bar/[bax]'
    );
    expect(stripGroupSegmentsFromPath('(foo)/(bar)')).toBe('');
  });
});

describe(matchGroupName, () => {
  it(`matches`, () => {
    expect(matchGroupName('[[...foobar]]')).toEqual(undefined);
    expect(matchGroupName('[[foobar]]')).toEqual(undefined);
    expect(matchGroupName('[...foobar]')).toEqual(undefined);
    expect(matchGroupName('[foobar]')).toEqual(undefined);
    expect(matchGroupName('(foobar)')).toEqual('foobar');
    expect(matchGroupName('(foo,bar)')).toEqual('foo,bar');
    expect(matchGroupName('((foobar))')).toEqual('(foobar)');
    expect(matchGroupName('(...foobar)')).toEqual('...foobar');
    expect(matchGroupName('foobar')).toEqual(undefined);
    expect(matchGroupName('leading/foobar')).toEqual(undefined);
    expect(matchGroupName('leading/(foobar)')).toEqual('foobar');
    expect(matchGroupName('leading/((foobar))')).toEqual('(foobar)');
    expect(matchGroupName('leading/(...foobar)')).toEqual('...foobar');
    expect(matchGroupName('leading/(foo,bar)')).toEqual('foo,bar');
    expect(matchGroupName('leading/foobar/trailing')).toEqual(undefined);
    expect(matchGroupName('leading/(foobar)/trailing')).toEqual('foobar');
    expect(matchGroupName('leading/((foobar))/trailing')).toEqual('(foobar)');
    expect(matchGroupName('leading/(...foobar)/trailing')).toEqual('...foobar');
    expect(matchGroupName('leading/(foo,bar)/trailing)')).toEqual('foo,bar');
    expect(matchGroupName('leading/(foo,bar)/(fruit,apple)')).toEqual('foo,bar');
    expect(matchGroupName('leading/(foo bar)/trailing')).toEqual('foo bar');
  });
});
describe(matchLastGroupName, () => {
  it(`matches`, () => {
    expect(matchLastGroupName('[[...foobar]]')).toEqual(undefined);
    expect(matchLastGroupName('[[foobar]]')).toEqual(undefined);
    expect(matchLastGroupName('[...foobar]')).toEqual(undefined);
    expect(matchLastGroupName('[foobar]')).toEqual(undefined);
    expect(matchLastGroupName('(foobar)')).toEqual('foobar');
    expect(matchLastGroupName('(foo,bar)')).toEqual('foo,bar');
    expect(matchLastGroupName('((foobar))')).toEqual('(foobar)');
    expect(matchLastGroupName('(...foobar)')).toEqual('...foobar');
    expect(matchLastGroupName('foobar')).toEqual(undefined);
    expect(matchLastGroupName('leading/foobar')).toEqual(undefined);
    expect(matchLastGroupName('(leading)/(foobar)')).toEqual('foobar');
    expect(matchLastGroupName('(leading)/((foobar))')).toEqual('(foobar)');
    expect(matchLastGroupName('(leading)/(...foobar)')).toEqual('...foobar');
    expect(matchLastGroupName('(leading)/(foo,bar)')).toEqual('foo,bar');
    expect(matchLastGroupName('(leading)/foobar/trailing')).toEqual('leading');
    expect(matchLastGroupName('(leading)/(foobar)/trailing')).toEqual('foobar');
    expect(matchLastGroupName('(leading)/((foobar))/trailing')).toEqual('(foobar)');
    expect(matchLastGroupName('(leading)/(...foobar)/trailing')).toEqual('...foobar');
    expect(matchLastGroupName('(leading)/(foo,bar)/trailing)')).toEqual('foo,bar');
    expect(matchLastGroupName('(leading)/(foo,bar)/(fruit,apple)')).toEqual('fruit,apple');
    expect(matchLastGroupName('(leading)/(foo,bar)/preceding(fruit,apple)')).toEqual('foo,bar');
    expect(matchLastGroupName('(leading)/(foo,bar)/preceding(fruit,apple)trailing')).toEqual(
      'foo,bar'
    );
    expect(matchLastGroupName('leading/(app)/(foo/,bar)')).toEqual('app');
    expect(matchLastGroupName('leading/(app)/(foo(,bar)')).toEqual('foo(,bar');
    expect(matchLastGroupName('leading/(app)/(foo(,bar)/trailing')).toEqual('foo(,bar');
    expect(matchLastGroupName('leading/(foo bar)/trailing')).toEqual('foo bar');
  });
});
describe(matchDynamicName, () => {
  it(`matches dynamic names`, () => {
    expect(matchDynamicName('[[...foobar]]')).toEqual(undefined);
    expect(matchDynamicName('[[foobar]]')).toEqual(undefined);
    expect(matchDynamicName('[foobar]')).toEqual({ name: 'foobar', deep: false });
    expect(matchDynamicName('foobar')).toEqual(undefined);
  });

  it(`matches deep dynamic names`, () => {
    expect(matchDynamicName('[[...foobar]]')).toEqual(undefined);
    expect(matchDynamicName('[[foobar]]')).toEqual(undefined);
    expect(matchDynamicName('[...foobar]')).toEqual({ name: 'foobar', deep: true });
  });
});

describe(getNameFromFilePath, () => {
  it(`should return the name of the file`, () => {
    expect(getNameFromFilePath('./pages/home.tsx')).toBe('pages/home');
    expect(getNameFromFilePath('../pages/home.js')).toBe('pages/home');
    expect(getNameFromFilePath('./(home).jsx')).toBe('(home)');
    expect(getNameFromFilePath('../../../(pages)/[any]/[...home].ts')).toBe(
      '(pages)/[any]/[...home]'
    );
  });
});

describe(matchArrayGroupName, () => {
  it(`should not match routes without groups`, () => {
    expect(matchArrayGroupName('[[...foobar]]')).toEqual(undefined);
    expect(matchArrayGroupName('[[foobar]]')).toEqual(undefined);
    expect(matchArrayGroupName('[...foobar]')).toEqual(undefined);
    expect(matchArrayGroupName('[foobar]')).toEqual(undefined);
    expect(matchArrayGroupName('foobar')).toEqual(undefined);
    expect(matchArrayGroupName('leading/foobar')).toEqual(undefined);
    expect(matchArrayGroupName('leading/foobar/trailing')).toEqual(undefined);
  });
  it(`should not match routes with a single group`, () => {
    expect(matchArrayGroupName('(foobar)')).toEqual(undefined);
    expect(matchArrayGroupName('((foobar))')).toEqual(undefined);
    expect(matchArrayGroupName('(...foobar)')).toEqual(undefined);
    expect(matchArrayGroupName('leading/(foobar)')).toEqual(undefined);
    expect(matchArrayGroupName('leading/((foobar))')).toEqual(undefined);
    expect(matchArrayGroupName('leading/(...foobar)')).toEqual(undefined);
    expect(matchArrayGroupName('leading/(foobar)/trailing')).toEqual(undefined);
    expect(matchArrayGroupName('leading/((foobar))/trailing')).toEqual(undefined);
    expect(matchArrayGroupName('leading/(...foobar)/trailing')).toEqual(undefined);
    expect(matchArrayGroupName('(leading)/foobar')).toEqual(undefined);
    expect(matchArrayGroupName('(leading)/(foobar)')).toEqual(undefined);
    expect(matchArrayGroupName('(leading)/((foobar))')).toEqual(undefined);
    expect(matchArrayGroupName('(leading)/(...foobar)')).toEqual(undefined);
    expect(matchArrayGroupName('(leading)/foobar/trailing')).toEqual(undefined);
    expect(matchArrayGroupName('(leading)/(foobar)/trailing')).toEqual(undefined);
    expect(matchArrayGroupName('(leading)/((foobar))/trailing')).toEqual(undefined);
    expect(matchArrayGroupName('(leading)/(...foobar)/trailing')).toEqual(undefined);
  });
  it(`should match routes with array group syntax`, () => {
    expect(matchArrayGroupName('(foo,bar)')).toEqual('foo,bar');
    expect(matchArrayGroupName('leading/(foo,bar)')).toEqual('foo,bar');
    expect(matchArrayGroupName('leading/(foo,bar)/trailing)')).toEqual('foo,bar');
    expect(matchArrayGroupName('leading/((foo),(bar))/trailing)')).toEqual('(foo),(bar)');
    expect(matchArrayGroupName('leading/(foo,bar)/(fruit,apple)')).toEqual('foo,bar');
    expect(matchArrayGroupName('(leading)/(foo,bar)')).toEqual('foo,bar');
    expect(matchArrayGroupName('(leading)/(foo,bar)/trailing)')).toEqual('foo,bar');
    expect(matchArrayGroupName('(leading)/((foo),(bar))/trailing)')).toEqual('(foo),(bar)');
  });
  it(`should only match the first group with array group syntax`, () => {
    expect(matchArrayGroupName('(leading)/(foo,bar)/(fruit,apple)')).toEqual('foo,bar');
    expect(matchArrayGroupName('(leading)/((foo),bar)/(fruit,apple)')).toEqual('(foo),bar');
    expect(matchArrayGroupName('(leading)/(foo,bar)/((fruit),apple)')).toEqual('foo,bar');
  });
});
