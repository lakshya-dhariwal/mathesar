import type { AbstractTypeFilterDefinition } from '@mathesar/stores/abstract-types/types';
import { Filtering } from '@mathesar/stores/table-data';
import type { FilterEntry } from '@mathesar/stores/table-data/types';

export function validateFilterEntry(
  filterCondition: AbstractTypeFilterDefinition,
  value: unknown,
): boolean {
  if (filterCondition.parameters.length === 0) {
    return typeof value === 'undefined';
  }
  return typeof value !== 'undefined' && String(value) !== '';
}

export function deepCloneFiltering(filtering: Filtering): Filtering {
  return new Filtering({
    combination: filtering.combination,
    // OPTIMIZE: Find a faster way to deep clone filtering entries
    entries: JSON.parse(JSON.stringify(filtering.entries)) as FilterEntry[],
  });
}
