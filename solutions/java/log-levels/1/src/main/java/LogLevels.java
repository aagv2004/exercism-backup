public class LogLevels {
    
    public static String message(String logLine) {
        int finTipoDeLog = logLine.indexOf(":", 0);
        String resultado = logLine.substring(finTipoDeLog + 1);
        return resultado.trim();
    }

    public static String logLevel(String logLine) {
        String[] logArray = logLine.split(":");
        int corchete1 = logArray[0].indexOf("[");
        int corchete2 = logArray[0].indexOf("]");

        String resultado = logArray[0].substring(corchete1 + 1, corchete2);
        return resultado.toLowerCase();
    }

    public static String reformat(String logLine) {
        String message = LogLevels.message(logLine);
        String level = LogLevels.logLevel(logLine);

        String levelConParentesis = " (" + level + ")";
        return message + levelConParentesis;
    }
}
