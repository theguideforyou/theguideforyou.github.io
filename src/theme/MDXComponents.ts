// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import { CardSection } from '../components/CardSection';
import { Card } from '../components/Card';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  CardSection,
  Card
};
