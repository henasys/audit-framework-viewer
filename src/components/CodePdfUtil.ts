export const CodePdfList = [
  { file: "EA01-1.pdf", order: 1, heightAdjust: 0, gapAdjust: 0 },
  { file: "EA01-2.pdf", order: 2, heightAdjust: 0, gapAdjust: 0 },
  { file: "EA01-3.pdf", order: 3, heightAdjust: 0, gapAdjust: 1 },
  { file: "EA02-1.pdf", order: 4, heightAdjust: 0, gapAdjust: 0 },
  { file: "EA02-2.pdf", order: 5, heightAdjust: 0, gapAdjust: 1 },
  { file: "EA02-3.pdf", order: 6, heightAdjust: 0, gapAdjust: 0 },
  { file: "EA02-4.pdf", order: 7, heightAdjust: 0, gapAdjust: 2 },

  { file: "IS01-1.pdf", order: 8, heightAdjust: 0, gapAdjust: 0 },
  { file: "IS01-2.pdf", order: 9, heightAdjust: 0, gapAdjust: 0 },
  { file: "IS01-3.pdf", order: 10, heightAdjust: 0, gapAdjust: 1 },
  { file: "IS02-1.pdf", order: 11, heightAdjust: 0, gapAdjust: 0 },
  { file: "IS02-2.pdf", order: 12, heightAdjust: 0, gapAdjust: 1 },

  { file: "SD11-1.pdf", order: 13, heightAdjust: 0, gapAdjust: 0 },
  { file: "SD11-2.pdf", order: 14, heightAdjust: 0, gapAdjust: 0 },
  { file: "SD11-3.pdf", order: 15, heightAdjust: 0, gapAdjust: 1 },
  { file: "SD12-1.pdf", order: 16, heightAdjust: 0, gapAdjust: 1 },
  { file: "SD12-2.pdf", order: 17, heightAdjust: 0, gapAdjust: 0 },
  { file: "SD12-3.pdf", order: 18, heightAdjust: 0, gapAdjust: 1 },
  { file: "SD13-1.pdf", order: 19, heightAdjust: 0, gapAdjust: 0 },
  { file: "SD13-2.pdf", order: 20, heightAdjust: 0, gapAdjust: 1 },
  { file: "SD13-3.pdf", order: 21, heightAdjust: 0, gapAdjust: 1 },
  { file: "SD14-1.pdf", order: 22, heightAdjust: 0, gapAdjust: 0 },
  { file: "SD15-1.pdf", order: 23, heightAdjust: 0, gapAdjust: 1 },

  { file: "SD21-1.pdf", order: 24, heightAdjust: 0, gapAdjust: 0 },
  { file: "SD21-2.pdf", order: 25, heightAdjust: 0, gapAdjust: 0 },
  { file: "SD21-3.pdf", order: 26, heightAdjust: 0, gapAdjust: 1 },
  { file: "SD22-1.pdf", order: 27, heightAdjust: 0, gapAdjust: 1 },
  { file: "SD22-2.pdf", order: 28, heightAdjust: 0, gapAdjust: 0 },
  { file: "SD22-3.pdf", order: 29, heightAdjust: 0, gapAdjust: 1 },
  { file: "SD23-1.pdf", order: 30, heightAdjust: 0, gapAdjust: 1 },
  { file: "SD23-2.pdf", order: 31, heightAdjust: 0, gapAdjust: 0 },
  { file: "SD23-3.pdf", order: 32, heightAdjust: 0, gapAdjust: 1 },

  { file: "SD01-4.pdf", order: 33, heightAdjust: 0, gapAdjust: 0 },
  { file: "SD02-4.pdf", order: 34, heightAdjust: 0, gapAdjust: 0 },
  { file: "SD03-4.pdf", order: 35, heightAdjust: 0, gapAdjust: 1 },
  { file: "SD04-4.pdf", order: 36, heightAdjust: 0, gapAdjust: 1 },
  { file: "SD05-4.pdf", order: 37, heightAdjust: 0, gapAdjust: 0 },

  { file: "DB01-1.pdf", order: 38, heightAdjust: 22, gapAdjust: 0 },
  { file: "DB02-1.pdf", order: 39, heightAdjust: 0, gapAdjust: 0 },
  { file: "DB02-2.pdf", order: 40, heightAdjust: 0, gapAdjust: 1 },

  { file: "OP01-1.pdf", order: 41, heightAdjust: 0, gapAdjust: 0 },
  { file: "OP01-2.pdf", order: 42, heightAdjust: 0, gapAdjust: 1 },

  { file: "MA01-1.pdf", order: 43, heightAdjust: 0, gapAdjust: 0 },

  { file: "PM01-1.pdf", order: 44, heightAdjust: 0, gapAdjust: 0 },
  { file: "PM02-1.pdf", order: 45, heightAdjust: 0, gapAdjust: 2 },
  { file: "PM03-1.pdf", order: 46, heightAdjust: 0, gapAdjust: 0 },
];

// Cache for storing calculated heights
const heightCache: { [key: number]: number } = {};

export const getFileInfo = (
  order: number
): { url: string; top: number; height: number } => {
  const item = CodePdfList.find((item) => item.order === order);
  if (!item) {
    throw new Error(`No file found for order ${order}`);
  }

  const baseGap = 2;
  const baseHeight = 25;
  const height = baseHeight + item.heightAdjust;
  const gap = baseGap + item.gapAdjust;
  const topStart = 44;

  // Calculate top position using cached heights
  let top = topStart;
  if (order > 1) {
    top = heightCache[order - 1] || topStart;
  }

  // Update cache for current order
  heightCache[order] = top + height + gap;

  return {
    url: `/data/${item.file}`,
    top,
    height,
  };
};
