import { Injectable } from '@nestjs/common';
import { db } from '../db/index.js';
import { TEST_ROW_ID, test } from '../db/schema.js';

const rowColumns = { id: test.id, checked: test.checked };

@Injectable()
export class TestService {
  async find() {
    await db.insert(test).values({ id: TEST_ROW_ID }).onConflictDoNothing();

    const [row] = await db.select(rowColumns).from(test).limit(1);
    return row ?? null;
  }

  async setChecked(checked: boolean) {
    const [row] = await db
      .insert(test)
      .values({ id: TEST_ROW_ID, checked })
      .onConflictDoUpdate({
        target: test.id,
        set: { checked },
      })
      .returning(rowColumns);

    return row;
  }
}
