// ============================================================================
// Date Created: 28/11/2019
// Created By: Salaah Amin
// ============================================================================
// Contains imports of all the main classes.
// Behaves as the main hub for the js bundle.
// ============================================================================

import { Navigation } from './components/navigation';
import { DropdownMenu } from './components/dropdown-menu';
import { QuantityComponent } from './components/quantity';
import { SearchFilters } from './components/search_filters';

new Navigation();
new DropdownMenu();
new QuantityComponent();
new SearchFilters();
