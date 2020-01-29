export const getMiceCountText = miceCount => {
  if (miceCount === 1) {
    return "мышь";
  }

  if (miceCount % 100 >= 11 && miceCount % 100 <= 14) {
    return "мышей";
  }

  switch (miceCount % 10) {
    case 1:
      return "мышь";
    case 2:
    case 3:
    case 4:
      return "мыши";
    default:
      return "мышей";
  }
};

export const getServingsCountText = servingsCount => {
  if (servingsCount % 100 >= 11 && servingsCount % 100 <= 14) {
    return "порций";
  }

  switch (servingsCount % 10) {
    case 1:
      return "порция";
    case 2:
    case 3:
    case 4:
      return "порции";
    default:
      return "порций";
  }
};
