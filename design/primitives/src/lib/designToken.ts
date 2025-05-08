import designTokensValues from './designTokens.json' with { type: 'json' };
import { flattenTokens } from './utils/utils.ts';


/// design tokens
export const designTokens = flattenTokens(designTokensValues);
