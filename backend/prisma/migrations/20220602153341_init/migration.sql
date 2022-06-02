-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TagToTodo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_TagToTodo_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TagToTodo_B_fkey" FOREIGN KEY ("B") REFERENCES "Todo" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_text_key" ON "Tag"("text");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToTodo_AB_unique" ON "_TagToTodo"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToTodo_B_index" ON "_TagToTodo"("B");
