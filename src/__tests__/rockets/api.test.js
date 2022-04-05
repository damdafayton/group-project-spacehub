import * as api from '../../api';
import rockets from './_rockets';

test('rockets api fetch', () => expect(api.rockets()).resolves.toEqual(rockets));
